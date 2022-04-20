import IFlyersAnimals from "../Interfaces/IFlyersAnimals";

export default class FlyerAnimalService {
  private animal: IFlyersAnimals;

  constructor(flyerAnimal: IFlyersAnimals) {
    this.animal = flyerAnimal;
  }

  public fly() {
    return this.animal.fly();
  }

  public land() {
    return this.animal.land();
  }
}
