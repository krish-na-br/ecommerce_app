const mongoose = require('mongoose');

mongoose.connect('')
.then(() => {
    console.log("DB connected")
})
.catch(err => {
    console.log(err)
})