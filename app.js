const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

// Configurar el motor de plantillas Handlebars
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Configurar el directorio de vistas
app.set('views', path.join(__dirname, 'views'));

// Middleware para analizar cuerpos de solicitudes entrantes en un formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
const clientesRoutes = require('./routes/clientes');
app.use('/', clientesRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
