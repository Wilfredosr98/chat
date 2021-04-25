const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wilfre:wilfre@cluster0.zgvyq.mongodb.net/test', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));