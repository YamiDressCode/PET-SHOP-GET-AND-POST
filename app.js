const express = require('express');
const app = express();
const port = 3000;

let usuarios = [];
app.use(express.json());

app.get('/usuarios', (req,res)=>{
    res.json(usuarios);
});
app.post('/usuarios', (req,res)=>{
    const {nome,email,endereço,telefone} = req.body;
    if (!nome || !email || !endereço || !telefone){
        return res.status(400).json({ error : 'Informações obrigatórias'});
    }
    const novoUsuario = {id: usuarios.length +1,nome,email,endereço,telefone};
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// ROTA PARA PETS 

let pets = [];


app.get('/pets', (req,res)=>{
    res.json(pets);
});
app.post('/pets', (req,res)=>{
    const {nome,cadastro} = req.body;
    if (!nome || !cadastro ){
        return res.status(400).json({ error : 'Informações obrigatórias'});
    }
    const novoPet = {id: pets.length +1,nome,cadastro};
    pets.push(novoPet);
    res.status(201).json(novoPet);
});

// APP LISTEN

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});