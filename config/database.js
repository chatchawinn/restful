const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
    .then(() => {
        console.log("Success connecet to database");
    })
    .catch((error) =>{
        console.error(error);
        process.exit(1)
    })
}