'use strict';

const express = require('express');
const { rawListeners } = require('../models/ejercicio.model');
const router = express.Router();
const Ejercicio = require('../models/ejercicio.model');

router.post('/registrar-productor', (req, res) => {
    let ejercicip = new Ejercicio({
        nombre: req.body.nombre,
        zona: req.body.zona,
        estado: 'Activo'
    });
    ejercicio.save((err, ejercicio_bd)=>{
        if(err) {
            res.json({
                msj:'El ejercicio no se pudo registrar',
                err
            });
        }else{
            res.json({
                msj: 'El ejercicio se registro correctamente',
                ejercicio_bd
            });
        }
    })
});

module.exports = router;