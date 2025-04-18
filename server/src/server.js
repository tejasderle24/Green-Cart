import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB  from "./config/db.js";
import userRouter from "./routes/userRoute.js";

// Load environment variables
dotenv.config({ path: "./.env" });

app.get("/", (req, res) => res.send("API is Working"));
app.use('/api/user', userRouter)

// Connect to DB and start server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed!", err);
  });
