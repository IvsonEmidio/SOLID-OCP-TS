import ICarStrategy from "../../Interface/ICarStrategy";

export default class FuscaStrategy implements ICarStrategy{
    public getBrand(): object{
        return {
            Brand: "Fusca"
        }
    }
}