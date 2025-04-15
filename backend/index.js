import { app } from "./app.js";
import connectDB from "./db/index.js";

import "dotenv/config";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });

    app.get("/", (req, res) => {
      res.send("hello world");
    });
  })
  .catch((error) =>  
    console.log(error));
