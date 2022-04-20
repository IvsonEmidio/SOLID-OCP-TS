import ICarStrategy from "../../Interface/ICar";

export default class FuscaStrategy implements ICarStrategy{
    public getBrand(): object{
        return {
            Brand: "Fusca"
        }
    }
}