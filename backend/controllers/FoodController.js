import foodModel from '../models/foodmodel.js';
import fs from 'fs';

// Add food item
const addItems = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const image_filename = req.file.filename;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Item added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Unable to add Food Item" });
    }
};

// All food list
const allFoodList = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Remove food item
const removeITem = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food Item not found" });
        }

        // Remove the image from the uploads directory
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.log(err);
        });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Item is removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addItems, allFoodList, removeITem };
