import ICarStrategy from "../../Interface/ICar";

export default class PrismaStrategy implements ICarStrategy{
    public getBrand(): object{
        return {
            Brand: "Prisma"
        }
    }
}