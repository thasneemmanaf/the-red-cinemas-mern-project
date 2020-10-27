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

// Middlewares
app.use(express.json());

// Implement cors
app.use(cors());

// Routes
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  logger.debug('hi there');
  res.json({
    message: 'it works'
  });
});

module.exports = app;
