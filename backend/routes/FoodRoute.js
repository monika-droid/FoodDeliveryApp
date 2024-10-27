import express from 'express';
import multer from 'multer';
import { addItems, allFoodList, removeITem } from '../controllers/FoodController.js'; // Adjust the import based on your structure
import foodModel from '../models/foodmodel.js';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Use current timestamp to avoid filename collisions
    },
});

// Initialize multer
const upload = multer({ storage: storage });

// Add food item route with image upload
router.post('/add', upload.single('image'), addItems); // 'image' should match the form field name

// Other routes
router.get('/', allFoodList);
router.delete('/', removeITem);

export default router;
