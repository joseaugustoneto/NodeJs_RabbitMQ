const express = require('express');
const cors = require('cors');
const apiRouterV1 = require('./v1/index')
const apiRouterV2 = require('./v2/index')

let app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', apiRouterV1);
app.use('/api/v2', apiRouterV2);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ code: 404, status: '404 Not Found' })
  res.end();
});


module.exports = app;