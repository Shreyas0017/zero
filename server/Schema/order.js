import mongoose from "mongoose";  // ✅ Use import instead of require

const orderSchema = new mongoose.Schema({
    date: String,  // ✅ Add "new" before mongoose.Schema
    oid: Number,
    name: String,
    image: String,
    count: Number,
    price: Number,  
    offer: String 
    
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;
