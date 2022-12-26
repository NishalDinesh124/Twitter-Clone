const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imgSchema = new Schema({
    userId : String,
    name : String,
    img : {
        data: Buffer,
        contentType : String
    },
})
const ImageModel = mongoose.model('Images', imgSchema);

module.exports = ImageModel;