require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

// Seguridad y parseo
app.use(helmet());
app.use(cors({
  origin: '*', // Cambiar por el dominio de tu frontend en producción
}));
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.send('Hola servidor de express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Rutas API
routerApi(app);

// Middlewares de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto ' + port);
});
