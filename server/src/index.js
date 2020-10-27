const { connect } = require('./config/database');
const app = require('./server');

require('dotenv').config();

const port = process.env.PORT || 8080;

connect();
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Running on Port ${port}`));
