const express=require("express");
const app = express();
const path = require("path");

const port=80;
app.use(express.static(path.join(__dirname, "Sorting")))
app.use(express.static(path.join(__dirname, "Searching")))
app.use(express.static(path.join(__dirname, "Stack")))
app.use(express.static(path.join(__dirname, "Queue")))
app.use(express.static(path.join(__dirname, "Tree")))
app.use(express.static(path.join(__dirname, "Graph")))
app.use('/css',express.static(__dirname +'/css'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
}) 