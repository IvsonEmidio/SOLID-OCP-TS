import ICarStrategy from "../Interface/ICar";

export default class CarStrategyContext {
  private strategy: ICarStrategy;

  constructor(strategy: ICarStrategy) {
    this.strategy = strategy;
  }

  public brand() {
    return this.strategy.getBrand();
  }
}
