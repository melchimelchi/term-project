// 서버를 실행합니다.
const app = require('express')();
const server = require('http').Server (app);
const io = require('socket.io') (server);

// 서버를 실행합니다.
server.listen(52273);

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.emit('news', {
        hello: 'world'
    });
    socket.on('other event', (data) => {
        console.log(data);
    });
});