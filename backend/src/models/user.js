import mongoose from 'mongoose'

const { Schema } = mongoose;

const UserSchema = new Schema({

    email: {String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    name: String,
    addressCode: String,
    address: String,
    addressDetail: String,
    homePhone: String,
    mobilePhone: String,
    birth: { type: Date, default: Date.now },
    point: { type: Number, default: 1000, max: 1000000, index: true },
    cart: [],
    id: mongoose.Schema.Types.ObjectId,
    publishedDate: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);
export default User

