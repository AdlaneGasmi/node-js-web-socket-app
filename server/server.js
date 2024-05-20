 
var client_host="http://localhost"
var client_port="8080"
var url= `${client_host}:${client_port}`

// call socket.io function and pass it to port 3000 
const io = require("socket.io")(3000,{    
   
   cors:{
      origin:[url]
   }
})
 //the function runs every time that the user connects to the server and give a socket 
 
io.on('connection', socket => {
   console.log(`User ${socket.id} connected`)
   // recieve data from client side
   socket.on("custom-event", (number,string,obj) => {
   console.log(number,string,obj)
   
// send to client
   io.emit('server-recieved-message',  "number " + number +"string " +string +"obj " +obj ) 
 })
}) 

