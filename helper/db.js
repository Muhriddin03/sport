const uri = 'mongodb+srv://Markets:JQcJJQh6fNTcyuzw@cluster0.cjcyn.mongodb.net/?retryWrites=true&w=majority '
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(uri, () => {
            console.log('MongoDB connected');
        })
    } catch (error) {
        console.log(error);
    }
}