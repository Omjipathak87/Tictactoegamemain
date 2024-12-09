let express=require('express');
let app=express();

app.use(express.static("todoapp"));

app.listen(5000,()=>{
    console.log("Node server is running");
});