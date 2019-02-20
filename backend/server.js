import express from 'express'
import mongodb from 'mongodb'

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux'



mongodb.MongoClient.connect(dbUrl,function(err,db){

    app.get('/api/students',(req,res) => {
        db.collection('students').find({}).toArray((err,students)=>{
            res.json({studens})
            
        })
    })

    app.listen(8080,()=>console.log('server is running on localhost:8080'))
})
