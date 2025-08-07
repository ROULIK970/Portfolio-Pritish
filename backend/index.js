import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config({ path: "./env" });

const app = express()

app.use(express.json())
app.use(cors())
const PORT = 8000



mongoose
  .connect(`${process.env.MONGODB_URI}/my-portfolio`)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});

import guestModel from './guest.model.js'

app.post("/api/v1/message", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const createdContact = await guestModel.create({
      name,
      email,
      subject,
      message
    })

    if(createdContact){
      return res
      .status(201)
      .json({message:"Message Sent Successfully!", success:true})
    }

    return res
    .status(400)
    .json({message:"Bad request", success:false})

  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
});