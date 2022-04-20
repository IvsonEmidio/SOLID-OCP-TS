import ICarStrategy from "../Interface/ICarStrategy";

export default class CarStrategyContext {
  private strategy: ICarStrategy;

  constructor(strategy: ICarStrategy) {
    this.strategy = strategy;
  }

  public brand() {
    return this.strategy.getBrand();
  }
}
