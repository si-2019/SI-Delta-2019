const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 31904;



app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const Sequelize = require('sequelize');
const db = require('./server/db.js')
db.sequelize.sync();


app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//# region get zahtjev za dobavljanje ocjene
app.get('/ocjena/:idPredmeta/:idStudenta', async(req,res)=>{
    try{
      const imaLiOcjene= await  db.PredmetStudent.find({ where:{idStudent: req.params.idStudenta, idPredmet: req.params.idPredmeta}, attributes: ['ocjena']});
      if(imaLiOcjene==null){
        res.send("Student nije upisan na predmet")
      }

      else if(imaLiOcjene.ocjena==null){
        res.send("Nema konačne ocjene");

      }
      else{
        res.send(JSON.stringify(imaLiOcjene.ocjena));
      }
    } catch( error){
      res.status(400).send({error:error.message});
      
    }    
});

//#endregion

//Server
app.listen(port, () => console.log(`Server pokrenut na portu ${port}`));
//

module.exports = app;
