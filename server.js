const Server = require("./bootstrap/Server");

process.on('uncaughtException', (err) => {
    console.warn(err);
});

new Promise((resolve, reject) => {
    Server.start();
    resolve();
});
