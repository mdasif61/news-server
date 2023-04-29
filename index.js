const express=require('express');
const app=express();
const port =process.env.PORT || 1020;
const cors = require('cors')
const category=require('./data/category.json');
const news=require('./data/news.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server Run Ok")
})

app.get('/category',(req,res)=>{
    res.send(category)
})

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    const selected=news.find(n=>n._id==id);
    res.send(selected)
})

app.get('/category/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    if(id===0){
        res.send(news)
    }else{
        const newsLoad=news.filter(n=>parseInt(n.category_id)===id);
        res.send(newsLoad)
    }
})

app.listen(port,()=>{
    console.log("News Server Running Port :", port)
})