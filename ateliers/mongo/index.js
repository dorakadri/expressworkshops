const http=require('http');
const app=require('./app.js');
const server =http.createServer(app);



const port=8000;
server.listen(port,()=>{
    console.log('app running on port ' + port);
})
