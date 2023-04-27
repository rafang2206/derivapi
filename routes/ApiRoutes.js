const express = require('express');
const { crearCuentaDemoMt5, 
    obtenerInformacionCuenta, 
    obtenerOrdenesAbiertas,
    obtenerPosicionesAbiertas,
    obtenerHistorialOrdenes,
    obtenerHistorialDeals
 } = require('../controllers/ApiController.js');

    
const router = express.Router();

router.post('/crear-cuenta', crearCuentaDemoMt5);

router.get('/obtener-usuario', obtenerInformacionCuenta);

router.get('/ordenes-abiertas', obtenerOrdenesAbiertas);

router.get('/posiciones-abiertas', obtenerPosicionesAbiertas);

router.get('/historial-ordenes', obtenerHistorialOrdenes);

router.get('/historial-deals', obtenerHistorialDeals);

module.exports = router;