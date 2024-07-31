//montar servidor en puerto 3000
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('recibi una peticion get')
});

app.post('/', (req, res) =>{
    res.send('recibi una peticion post')
});

app.put('/actualizar', (req, res) =>{
    res.send('actualizando info')
});

app.patch('/', (req, res) =>{
    res.send('recibi una peticion patch')
});

app.delete('/', (req, res) =>{
    res.send('recibi una peticion delete')
});

app.listen(3000, ()=>{ //esto es un callback
    console.log(`servidor corriendo en puerto ${port}`)
});
