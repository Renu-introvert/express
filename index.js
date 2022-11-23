const express=require("express")
const app=express()
const cors=require("cors")
const port=2000;
const employee={id:25,name:"react",position:"frontend"}
const student=require("./data.js")

app.use(cors())

app.get("/",(req,res)=>{
	res.send("starting route")
})
app.get("/demo",(req,res)=>{
	res.send("this is demo route")
})
app.get("/emp",(req,res)=>{
	res.json(employee)
})
app.get("/student-list",(req,res)=>{
	res.json(student)
})

app.listen(port,()=>console.log("server is running on port 2000"))

