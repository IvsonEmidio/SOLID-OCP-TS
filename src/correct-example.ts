import ICar from "./ICar";

class Diablo implements ICar {
  readonly brand = "Lamborghini";
  readonly color = "black";

  public getMarketPrice(): Promise<number> {
    return new Promise((resolve, reject) => {
      let result = 200;

      if (typeof result === "number") {
        resolve(80);
      }

      reject(20);
    });
  }
}

class Soul implements ICar {
  readonly brand = "Kia";
  readonly color = "Red";

  public getMarketPrice(): Promise<number> {
    return new Promise((resolve, reject) => {
      let result = 200;

      if (typeof result === "number") {
        resolve(350);
      }

      reject(20);
    });
  }
}
