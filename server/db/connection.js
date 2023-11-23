const mongoose = require('mongoose');

const url = `mongodb+srv://chatify:1234@cluster0.vyqo4wk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url).then(() => console.log('Connected to DB')).catch((e) => console.log('Error', e))