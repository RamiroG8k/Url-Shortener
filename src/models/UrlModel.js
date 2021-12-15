import { Schema, model } from 'mongoose';

const urlSchema = new Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Url', urlSchema);