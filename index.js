const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const jwt=require('jsonwebtoken')

dotenv.config();
const app = express();
const http = require('http').createServer(app);
let socketMap = [];
const io = require("socket.io")(3100, {
    cors: {
        origin: "http://localhost:4200",
    },
});


io.on('connection', (socket) => {
     console.log("conc");
     const decoded=jwt.verify(socket.handshake.headers.authorization,process.env.JWT_SECRET)
      
      let NewConnection={
        id:decoded.id +decoded.role,
        socket:socket
      }
      socketMap.unshift(NewConnection)
   
       
})

module.exports.sendToUser = (msg,userID) =>{
   
     console.log(socketMap);
    let foundSocketObj = socketMap.find(obj => obj.id === userID);
 
    foundSocketObj?.socket.emit("dataUpdate", JSON.stringify(msg));
}
const routerApi = require('./routes');

const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + MySQL');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});

module.exports = app;