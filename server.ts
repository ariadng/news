import express from 'express';
import * as http from 'http';

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const port = 8100;

server.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});

