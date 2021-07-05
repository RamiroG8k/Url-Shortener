import { Schema, model } from 'mongoose';

const genericSchema = new Schema({
    name: String,
    quantity: Number,
}, {
    timestamps: true,
    versionKey: false
});

export default model('Generic', genericSchema);