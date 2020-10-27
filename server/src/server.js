const express = require('express');
const cors = require('cors');

const pino = require('pino');
const expressLogger = require('express-pino-logger');

const app = express();

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
global.logger = logger;

if (['development', 'production'].includes(process.env.NODE_ENV)) {
  app.use(expressLogger({ logger }));
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  logger.debug('hi there');
  res.json({
    message: 'it works'
  });
});

module.exports = app;
