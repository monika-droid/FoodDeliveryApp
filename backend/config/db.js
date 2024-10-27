import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://monika:monika@cluster0.mlkj1.mongodb.net/food-app?retryWrites=true&w=majority&appName=Cluster0');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
    }
}

export default connectDb;
