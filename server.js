'use strict';
import http from 'http';

import app from './src/app';
import config from './src/config';

app.set('port', config.server.port);
const server = http.createServer(app);
server.listen(config.server.port);
server.on('error', error => {
});
server.on('listening', () => console.log(`Server is listening on port ${config.server.port}`));

process.on('SIGINT', () => {
  console.log('Stopping server.');
  server.close(() => {
    console.log('Server stopped.');
  });
});