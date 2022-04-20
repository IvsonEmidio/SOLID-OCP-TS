import CarStrategyContext from "../Domain/Context/CarStrategyContext";
import ICarStrategy from "../Domain/Interface/ICarStrategy";
import FuscaStrategy from "../Domain/Strategy/Car/FuscaStrategy";
import GolStrategy from "../Domain/Strategy/Car/GolStrategy";
import PrismaStrategy from "../Domain/Strategy/Car/PrismaStrategy";

export default class CarService {
  private context: CarStrategyContext;

  constructor(carName: string) {
    let strategy = this.defineStrategy(carName);
    this.context = new CarStrategyContext(strategy);
  }

  public getBrand() {
    return this.context.brand();
  }

  private defineStrategy(carName: string): ICarStrategy {
    switch (carName) {
      case "gol":
        return new GolStrategy();
      case "fusca":
        return new FuscaStrategy();
      case "prisma":
        return new PrismaStrategy();
      default:
        return new FuscaStrategy();
    }
  }
}
