export default interface ICar {
  readonly brand: string;
  readonly color: string;

  getMarketPrice(): Promise<number>;
}
