import ICarStrategy from "../../Interface/ICarStrategy";

export default class GolStrategy implements ICarStrategy{
    public getBrand(): object{
        return {
            Brand: "Gol"
        }
    }
}