const express = require("express");
const app = express();
const cors = require('cors'); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

app.use(cors());

dotenv.config();
mongoose.set("strictQuery", false);

main().then(() => console.log("DB Connection Successful"));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => console.log("Backend Server is Running!"));
