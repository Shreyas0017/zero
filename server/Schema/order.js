import mongoose from "mongoose";  // ✅ Use import instead of require

const orderSchema = new mongoose.Schema({  // ✅ Add "new" before mongoose.Schema
    oid: Number,
    name: String,
    image: String,
    count: Number,
    price: Number,  // ✅ Add price field
    offer: String   // ✅ Add offer field
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;
