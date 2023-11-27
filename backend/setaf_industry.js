const expRef = require('express')
const refMysql=require('mysql2')
const bodyParser = require("body-parser")

const cors =require('cors')

const app = expRef()
const port=2030

const db=refMysql.createConnection({
    host:"localhost",
    user:"root",
    database:"report_management",
    port:"3306",
    password:""
})

db.connect(() => {
        console.log('Connected to MySQL database')
})


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



app.get('/show',async(req,res)=>{
    const query="select * from data_setaf_visit_to_industries_institution "
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
    const { S_NO,
            Faculty_name,
            Date_of_visit,	
            Name_of_industry,	
            Location_of_industry,	
            Website_link_of_industry,	
            Name_of_insdustry_instution_person_interacted,	
            Designation_of_industry_instution_person_interacted,	
            Purpose_of_the_visite,
            Outcome_of_the_activity
    
    }=req.body
    const sql="insert into data_setaf_visit_to_industries_institution values (?,?,?,?,?,?,?,?,?,?);"
    db.query(sql,[S_NO,
                Faculty_name,
                Date_of_visit,	
                Name_of_industry,	
                Location_of_industry,	
                Website_link_of_industry,	
                Name_of_insdustry_instution_person_interacted,	
                Designation_of_industry_instution_person_interacted,	
                Purpose_of_the_visite,
                Outcome_of_the_activity
        // ,Attachment,Certificate_PDF
    ],(err,result)=>{
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


