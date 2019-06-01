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

//#region get zahtjev za provjeru postoji li ispit za predmet
app.get('/ispitObavjestenje/:idPredmeta', async(req,res)=>{
  try{
    const ispiti=await db.Ispit.findAll({where:{idPredmet:req.params.idPredmeta}, attributes:['rokPrijave']});
    for(let i=0; i<ispiti.length; i++){
      var datum=new Date();
      if(ispiti[i].rokPrijave!=null && ispiti[i].rokPrijave.getTime()>datum.getTime()){
        res.send("Prijavite ispit");
      }
    }  
    
    res.send("Nema prijava");
      
    
  }catch( error){
    res.status(400).send({error:error.message});
  }  
});
//#endregion


app.get("/SI", async (req, res) => {
  try {
    const predmetSI = await db.Predmet.find({
      where: {
        naziv: "Softver inzenjering"
     }
    });
    res.send(JSON.stringify(predmetSI));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/dohvatiProfesora/:profesorID", async (req, res) => {
  const { profesorID } = req.params;
  try {
    const profesor = await db.Korisnik.find({
      where: {
        id: profesorID
     }
    });
    res.send(JSON.stringify(profesor));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//Server
app.listen(port, () => console.log(`Server pokrenut na portu ${port}`));
//

module.exports = app;
