const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/products", productRoute)


app.get('/', (req, res) => {
  res.send('Hello World')
})









app.listen(3000, ()=> {
    console.log("Server is running in port 3000")
})

mongoose.connect("mongodb+srv://elaouadouaail:xtRIlmyMETkDulXK@backenddb.dvuclah.mongodb.net/Crud-Api?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected!")
})
.catch(() => {
    console.log("Connection failed")
})