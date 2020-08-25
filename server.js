const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const port = 8100;

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
