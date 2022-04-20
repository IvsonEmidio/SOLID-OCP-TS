import express, { Request, Response } from "express";
import Bee from "./Animals/Bee";
import FlyerAnimalService from "./Services/AnimalsService";

const app = express();
const port = 3000;

app.get("/flyer-animal", (req: Request, res: Response) => {
  const animal = new Bee();
  const service = new FlyerAnimalService(animal);
  const result = service.fly();

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
