const express = require('express');

const app = express();

/**
 * Home del Server --> /
 */
app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGM Equipo 10"
    };

    res.send(objeto);

});


module.exports = app;
