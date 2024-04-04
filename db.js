const mongoose = require('mongoose');
const url = 'mongodb://localhost/data'; // Cambiar 'data' por el nombre de tu base de datos

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function() {
    console.log("Conectado a la base de datos");
});

module.exports = db;
