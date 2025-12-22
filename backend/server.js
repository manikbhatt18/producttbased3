const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* =======================
   App Initialization
======================= */
const app = express();

/* =======================
   Middlewares
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   Routes
======================= */
app.use("/api", require("./routes/contactRoutes"));
app.use("/api", require("./routes/complaintRoutes"));
app.use("/api", require("./routes/applicationRoutes"));

/* =======================
   Server Start
======================= */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
