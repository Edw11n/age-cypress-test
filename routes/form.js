const express = require('express');
const path = require('path');
const router = express.Router();

function calcularEdad(fechaNac) {
  const ahora = new Date();
  const nac = new Date(fechaNac);
  let años = ahora.getFullYear() - nac.getFullYear();
  let meses = ahora.getMonth() - nac.getMonth();
  let dias = ahora.getDate() - nac.getDate();
  if (dias < 0) {
    meses--;
    dias += new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
  }
  if (meses < 0) {
    años--;
    meses += 12;
  }
  return { años, meses, dias };
}

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/calcular', (req, res) => {
  const { nombre, apellido, sexo, fecha } = req.body;
  const edad = calcularEdad(fecha);
  return res.json({ nombre, apellido, sexo, edad });
});

module.exports = router;
module.exports.calcularEdad = calcularEdad;
