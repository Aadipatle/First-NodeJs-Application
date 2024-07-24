const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('My First Node Js Application Successfully Builded');
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})