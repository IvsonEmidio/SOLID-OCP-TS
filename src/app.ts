import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get(
    '/',
    (req: Request, res: Response) => {
       res.status(200).json({
           messsage: "all done"
       });
    }
)

try {
    app.listen(port, () => {
        console.log(`Successfully connected on port ${port}`)
    });
} catch (err){
    console.error(`An error has occurred when starting the server, check the error below.`)
    console.error(err);
}