import express from "express";
import cors  from 'cors'
import connectDb from "./config/db.js";
import foodRouter from "./routes/FoodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
//app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//Connect db
connectDb();


//Api endpoint
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
// app.use("api/cart", cartRouter)


//upload image
app.use("/images", express.static('uploads'))

app.get("/", (req, res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=>{
    console.log(`server running at ${port}`)
})
