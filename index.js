const express  = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const tripRoutes = require("./routes/trip");
const errorHandler = require("./middleware/errorHandler")

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Working"
    });
});

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});

app.use("/trips", tripRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
})

app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("Server listening on "+ PORT);
})