import IFlyersAnimals from "../Interfaces/IFlyersAnimals";

export default class Bird implements IFlyersAnimals {
  public fly(): object {
    return {
      message: "Flew!!",
    };
  }

  public land(): object {
    return {
      message: "Landed!!",
    };
  }
}
