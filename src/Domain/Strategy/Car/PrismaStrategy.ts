import ICarStrategy from "../../Interface/ICarStrategy";

export default class PrismaStrategy implements ICarStrategy{
    public getBrand(): object{
        return {
            Brand: "Prisma"
        }
    }
}