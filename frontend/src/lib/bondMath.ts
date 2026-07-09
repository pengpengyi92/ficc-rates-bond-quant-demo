export type ScenarioInput = {
  notional: number;
  yieldChangeBps: number;
  couponRate: number;
  yieldToMaturity: number;
  maturities: number[];
};

export type ScenarioResult = {
  maturity: number;
  price: number;
  macaulayDuration: number;
  modifiedDuration: number;
  convexity: number;
  priceChangePct: number;
  pnl: number;
};

const FACE_VALUE = 100;
const FREQUENCY = 2;

function cashflows(couponRate: number, maturityYears: number) {
  const periods = Math.round(maturityYears * FREQUENCY);
  const coupon = (FACE_VALUE * couponRate) / FREQUENCY;

  return Array.from({ length: periods }, (_, index) => {
    const period = index + 1;
    const amount = period === periods ? coupon + FACE_VALUE : coupon;
    return {
      period,
      timeYears: period / FREQUENCY,
      amount
    };
  });
}

function bondPrice(couponRate: number, yieldToMaturity: number, maturityYears: number) {
  const discountRate = yieldToMaturity / FREQUENCY;
  return cashflows(couponRate, maturityYears).reduce(
    (sum, cf) => sum + cf.amount / Math.pow(1 + discountRate, cf.period),
    0
  );
}

function macaulayDuration(couponRate: number, yieldToMaturity: number, maturityYears: number) {
  const price = bondPrice(couponRate, yieldToMaturity, maturityYears);
  const discountRate = yieldToMaturity / FREQUENCY;
  const weightedPv = cashflows(couponRate, maturityYears).reduce((sum, cf) => {
    const pv = cf.amount / Math.pow(1 + discountRate, cf.period);
    return sum + cf.timeYears * pv;
  }, 0);
  return weightedPv / price;
}

function modifiedDuration(couponRate: number, yieldToMaturity: number, maturityYears: number) {
  return macaulayDuration(couponRate, yieldToMaturity, maturityYears) / (1 + yieldToMaturity / FREQUENCY);
}

function convexity(couponRate: number, yieldToMaturity: number, maturityYears: number) {
  const price = bondPrice(couponRate, yieldToMaturity, maturityYears);
  const discountRate = yieldToMaturity / FREQUENCY;
  const convexitySum = cashflows(couponRate, maturityYears).reduce((sum, cf) => {
    return (
      sum +
      (cf.amount * cf.period * (cf.period + 1)) /
        Math.pow(FREQUENCY, 2) /
        Math.pow(1 + discountRate, cf.period + 2)
    );
  }, 0);
  return convexitySum / price;
}

export function calculateScenario(input: ScenarioInput): ScenarioResult[] {
  const yieldChange = input.yieldChangeBps / 10000;

  return input.maturities.map((maturity) => {
    const price = bondPrice(input.couponRate, input.yieldToMaturity, maturity);
    const macDur = macaulayDuration(input.couponRate, input.yieldToMaturity, maturity);
    const modDur = modifiedDuration(input.couponRate, input.yieldToMaturity, maturity);
    const conv = convexity(input.couponRate, input.yieldToMaturity, maturity);
    const priceChangePct = -modDur * yieldChange + 0.5 * conv * Math.pow(yieldChange, 2);
    const units = input.notional / FACE_VALUE;
    const pnl = units * price * priceChangePct;

    return {
      maturity,
      price,
      macaulayDuration: macDur,
      modifiedDuration: modDur,
      convexity: conv,
      priceChangePct,
      pnl
    };
  });
}

export function formatMoney(value: number) {
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)}bn RMB`;
  }
  if (abs >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}mn RMB`;
  }
  if (abs >= 10_000) {
    return `${(value / 10_000).toFixed(2)}wan RMB`;
  }
  return `${value.toFixed(2)} RMB`;
}
