import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(router);

app.use((req, res) => {
  res.status(404).send("Oops! We didn't find what you are looking for.");
});

app.listen(3001, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});
