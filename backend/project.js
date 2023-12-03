const expRef = require('express')
const refMysql=require('mysql2')
const bodyParser = require("body-parser")
//const root =require("./mec_rout")
const cors =require('cors')

const app = expRef()
const port=2020

const db=refMysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mec_report_management",
    port:"3306",
    password:""
})

db.connect(() => {
        console.log('Connected to MySQL database')
})


app.use(cors())
//app.use("/bh",root)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



app.get('/show',async(req,res)=>{
    const query="select * from data_setaf_nptel_certification "
    db.query(query,[req.params.user],(err,result)=>{
        if(err){
            res.status(404).json({error:err.message})
            return
        }
        if(result.length==0){
            res.status(500).json({message:"the value in not found in the table"})
            return
        }
        else{
            res.status(200).json(result)
        }
    })
})

app.post('/insert',async(req,res)=>{
    const {S_NO,Academic_year,Semester,Name_of_the_faculty,Year,Session,Course_name,Score_obtained,Certificat}=req.body
    const sql="insert into data_setaf_nptel_certification values (?,?,?,?,?,?,?,?,?);"
    db.query(sql,[S_NO,Academic_year,Semester,Name_of_the_faculty,Year,Session,Course_name,Score_obtained,Certificat],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})

app.listen(port,()=>{
    console.log(`App is running on the port ${port}`)
})


