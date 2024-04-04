const Cliente = require('../models/Cliente');

// Método para mostrar todos los clientes
exports.mostrar = (req, res) => {
    Cliente.find({}, (error, clientes) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar los clientes',
                error: error
            });
        }
        // Renderiza la vista de clientes con los datos obtenidos
        res.render('clientes', { clientes: clientes });
    });
};

// Método para crear un nuevo cliente
exports.crear = (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion
    });
    cliente.save((error, clienteGuardado) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el cliente',
                error: error
            });
        }
        // Después de crear el cliente, redirige a la página de clientes
        res.redirect('/clientes');
    });
};
