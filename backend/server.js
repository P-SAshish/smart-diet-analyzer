const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://ashmitha6628_db_user:Ashish%40123shiva@smart-diet-cluster.pcmukdr.mongodb.net/dietdb?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const DietSchema = new mongoose.Schema({
  age: Number,
  weight: Number,
  height: Number,
  activity: String,
  totalCalories: Number,
  consumedCalories: Number,
  status: String,
});

const Diet = mongoose.model("Diet", DietSchema);

app.post("/save", async (req, res) => {
  try {
    const data = new Diet(req.body);
    await data.save();
    res.json({ message: "Saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Save failed" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.get("/history", async (req, res) => {
  try {
    const data = await Diet.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});