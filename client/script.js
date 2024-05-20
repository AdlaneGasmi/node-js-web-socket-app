import {io} from 'socket.io-client'
 
var server_host="http://localhost"
var server_port="3000"
var url= `${server_host}:${server_port}`

const socket = io(url)

socket.on("connect",()=>{
    alert("you are connected with id : " + socket.id)
})

// send data to server side
socket.emit('custom-event',10,'hi',{a:'a'}) // send an event to server



socket.on("server-recieved-message", (number,string,obj) => {
    console.log("received message from server " + number,string,obj)
   
})