const express = require('express'); // Importar express
const routerApi = require('./routes'); // Importar las rutas
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const app = express(); // Asignar express a mi aplicación
const port = 3000; // Asignación puerto donde se ejecutará el proy
app.use(express.json());
require('dotenv').config();
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
require('dotenv').config({ path: envFile });



app.get('/', (req, res) => {
  res.send('Hola servidor de express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi puerto' + port);
});
