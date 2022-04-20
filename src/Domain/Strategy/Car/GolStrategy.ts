import ICarStrategy from "../../Interface/ICar";

export default class GolStrategy implements ICarStrategy{
    public getBrand(): object{
        return {
            Brand: "Gol"
        }
    }
}