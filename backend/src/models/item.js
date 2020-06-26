import mongoose from 'mongoose'

const { Schema } = mongoose;

const ItemSchema = new Schema({

    id: mongoose.Schema.Types.ObjectId,
    itemNo: {type:  String, required: true, unique: true, lowercase: true },
    itemName: { type: String, required: true, trim: true },
    color: String,
    size: String,
    price: Number,
    imgList: [Schema.Types.Mixed],
    discount: Number,
    description: String,
    review: [Schema.Types.Mixed],
    itemAmount: {type:  String, default: 0},
    publishedDate: {
        type: Date,
        default: Date.now
    },
});

const Item = mongoose.model('Item', ItemSchema);
export default Item

