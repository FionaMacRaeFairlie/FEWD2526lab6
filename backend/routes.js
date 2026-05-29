import express from "express";
import { items } from "./data.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello! Welcome to my application.");
});

router.get("/food", (req, res) => {
  res.json(items);
});

router.post("/addOrder", express.json(), function (req, res) {
  console.log(req.body);
  res.status(201).json({ message: "order received" + req.body });
});

export default router;
