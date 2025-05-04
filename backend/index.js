import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app =  express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"download7*",
    database:"user_db"
})

app.get("/users",(req,res)=>{
    const Query = "Select * from users"
    db.query(Query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post("/users",(req,res)=>{
    const Query = "Insert into users (`name`, `age`, `email`) values (?)"
    const values =[req.body.name, req.body.age, req.body.email]
    db.query(Query,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User created")
    })
})

app.put("/users",(req,res)=>{
    const Query = `Update users set name='${req.body.name}', age=${req.body.age}, email='${req.body.email}' where id=${req.body.id};`
    db.query(Query,(err,data)=>{
        if(err) return res.json(err);
        return res.json("User updated")
    })
})

app.delete("/users",(req,res)=>{
    const Query = "DELETE FROM `user_db`.`users` WHERE (`id` = ?);"
    const id =req.query.id
    db.query(Query,[id],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User deleted")
    })
})


app.listen(8800, ()=>{
    console.log("Connected to backend!")
})