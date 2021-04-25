const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wilfre:<password>@cluster0.zgvyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));


  