const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try{
        await mongoose.connect(db)

        console.log('Database connected succesfully')
    }catch(err){
        console.log(err.message)
        // Exit procces with fail
        process.exit(1)
    }
}

module.exports = connectDB