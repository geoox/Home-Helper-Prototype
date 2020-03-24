const mongoose = require('mongoose')

const AdvertisementSchema = mongoose.Schema({
    ad_id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    date: Date,
    remuneration: Number,
    owner_name: String,
    location: String
})

module.exports = mongoose.model('Advertisement', AdvertisementSchema)