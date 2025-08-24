// Import express default AND types
import express, { Application, Request, Response } from "express";
import greetingroute from "./routes/greeting.routes";


const app: Application = express(); // now express() is defined

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});



app.use("/greeting",greetingroute);




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
