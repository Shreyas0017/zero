import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";  // ✅ Import multer
import orderModel from "./Schema/order.js"; // ✅ Ensure correct import

const app = express();
const PORT = 3000;

// ✅ Middleware setup
app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type']  
}));
app.use(bodyParser.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://localhost:27017/ju")
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection error:", error.message));

// ✅ File storage setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ✅ Place Order Route
app.post("/place-order", async (req, res) => {
    const orders = req.body.products;

    if (!orders || orders.length === 0) {
        return res.status(400).json({ message: "No items to place an order!" });
    }

    try {
        await orderModel.insertMany(orders.map(order => ({
            date:order.date,
            oid: order.id,
            name: order.name,
            image: order.image,
            count: order.count,
            price: order.price,
            offer: order.offer
        })));

        console.log("Orders Stored in DB:", orders);
        res.status(200).json({ message: "Order placed successfully and stored in DB!" });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ message: "Failed to store order" });
    }
});

//fetchig   data from order section
app.get('/fetch',(req,res)=>{
    orderModel.find({}).then((respond)=>{
        res.json(respond)
    }).catch((error)=>{
        console.log(error)
    })
})
//delete section
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    orderModel.findByIdAndDelete(id).then((respond)=>{
        res.json(respond)
    }).catch((error)=>{
        console.log(error.message)
    })
})
//delete all-----------------
app.delete('/deleteall',(req,res)=>{
    orderModel.deleteMany({}).then((respond)=>{
        res.json(respond)
    }).catch((error)=>{
        console.log(error.message)
    })
})
// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
