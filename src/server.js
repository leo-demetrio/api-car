require('dotenv').config({path: 'variaveis.env'});
const swaggerUI = require('swagger-ui-express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const schemaDocs = require('./schema.json');
const routes = require('./routes');

const server = express();
server.use(cors({origin: 'http://localhost:3000/'}));
server.use(express.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use("/api-docs", swaggerUI.serve,swaggerUI.setup(schemaDocs));
server.use('/api',routes);

server.listen(process.env.PORT, () => {
    console.log(`Server running: http://localhost:${process.env.PORT}`);
});