const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})


http.listen(3000, () => {
    console.log('listening on port 3000');
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (message) => {
        console.log(message)
        socket.broadcast.emit('chat message', message);
    });
})