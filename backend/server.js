const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config({ path: __dirname + "/.env" });
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));