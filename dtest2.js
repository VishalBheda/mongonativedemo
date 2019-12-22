const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hellaro', {useNewUrlParser: true,  useUnifiedTopology: true });

const Cat = mongoose.model('Cat', {});

Cat.collection.createIndex({name: 1, color: 1}, {unique: 1})