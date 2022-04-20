import express, { Request, Response } from "express";
import CarService from "./Services/CarService";

const app = express();
const port = 3000;

app.get("/car-brand/:carName", (req: Request, res: Response) => {
  const carName = req.params.carName;
  const service = new CarService(carName);
  const result = service.getBrand();

  res.status(200).json({
    result,
  });
});

try {
  app.listen(port, () => {
    console.log(`Successfully connected on port ${port}`);
  });
} catch (err) {
  console.error(
    `An error has occurred when starting the server, check the error below.`
  );
  console.error(err);
}
