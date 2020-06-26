import mongoose from 'mongoose'

const { Schema } = mongoose;

const OrderSchema = new Schema({

    id: mongoose.Schema.Types.ObjectId,
    orderNo: {type:  String, required: true, unique: true, lowercase: true },
    totalPrice: Number,
    items: [Schema.Types.Mixed],
    status: {type: String},
    publishedDate: {
        type: Date,
        default: Date.now
    },
});

const Order = mongoose.model('Order', OrderSchema);
export default Order

