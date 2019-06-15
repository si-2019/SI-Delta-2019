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

//Swagger
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const Sequelize = require("sequelize");
const db = require("./server/db.js");
db.sequelize.sync();

app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//# region get zahtjev za dobavljanje ocjene
app.get("/ocjena/:idPredmeta/:idStudenta", async (req, res) => {
  try {
    const imaLiOcjene = await db.PredmetStudent.find({
      where: {
        idStudent: req.params.idStudenta,
        idPredmet: req.params.idPredmeta
      },
      attributes: ["ocjena"]
    });
    if (imaLiOcjene == null) {
      res.send("Student nije upisan na predmet");
    } else if (imaLiOcjene.ocjena == null) {
      res.send("Nema konačne ocjene");
    } else {
      res.send(JSON.stringify(imaLiOcjene.ocjena));
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//#endregion

//#region get zahtjev za provjeru postoji li ispit za predmet
app.get("/ispitObavjestenje/:idPredmeta", async (req, res) => {
  try {
    const ispiti = await db.Ispit.findAll({
      where: { idPredmet: req.params.idPredmeta },
      attributes: ["rokPrijave"]
    });
    for (let i = 0; i < ispiti.length; i++) {
      var datum = new Date();
      if (
        ispiti[i].rokPrijave != null &&
        ispiti[i].rokPrijave.getTime() > datum.getTime()
      ) {
        res.send("Prijavite ispit");
      }
    }

    res.send("Nema prijava");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
//#endregion

app.get("/zadacaObavjestenje/:idPredmeta", async (req, res) => {
  try {
    const zadace = await db.Zadaca.findAll({
      where: { idPredmet: req.params.idPredmeta },
      attributes: ["rokZaPredaju"]
    });
    for (let i = 0; i < zadace.length; i++) {
      var datum = new Date();
      if (
        zadace[i].rokZaPredaju != null &&
        zadace[i].rokZaPredaju.getTime() > datum.getTime()
      ) {
        res.send("Pošaljite zadaću");
      }
    }

    res.send("Nema zadaća");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});



app.get("/dohvatiEmailProfesora/:idProfesora", async (req, res) => {
  try {
    const email = await db.Korisnik.find({
      where: { id: req.params.idProfesora },
      attributes: ["email"]
    });
    res.send(JSON.stringify(email));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/dohvatiPredmet/:idPredmeta", async (req, res) => {
  try {
    const predmet = await db.Predmet.find({
      where: { id: req.params.idPredmeta },
      attributes: ["naziv", "ects", "idProfesor", "opis"]
    });
    res.send(JSON.stringify(predmet));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/rezultatiIspita/:idPredmeta/:idStudenta", async (req, res) => {
  try {
    const idIspita = await db.Ispit.find({
      where: {
        idPredmet: req.params.idPredmeta
      },
      attributes: ["idIspit"]
    });
    const bod = await db.IspitBodovi.find({
      where: {
        idKorisnika: req.params.idStudenta,
        idIspita: idIspita.idIspit
      },
      attributes: ["bodovi"]
    });
    res.send(JSON.stringify(bod));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/dohvatiProfesora/:idProfesora", async (req, res) => {
  try {
    const profesor = await db.Korisnik.find({
      where: { id: req.params.idProfesora },
      attributes: ["ime", "prezime"]
    });
    res.send(JSON.stringify(profesor));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/jeliProfesor/:idPredmeta/:idProfesora", async (req, res) => {
  try {
      var prof = req.params.idProfesora;
    const profesor = await db.Predmet.find({
      where: { id: req.params.idPredmeta },
      attributes: ["idProfesor"]
    });
    if(profesor == null){res.send("Ne postoji predmet");}
    if(profesor.idProfesor == prof){
    res.send(true);
  }
  else{ res.send(false);}
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/jeliAsistent/:idPredmeta/:idAsistenta", async (req, res) => {
  try {
      var asis = req.params.idAsistenta;
    const asistent = await db.Predmet.find({
      where: { id: req.params.idPredmeta },
      attributes: ["idAsistent"]
    });
    if(asistent == null){res.send("Ne postoji predmet");}
    if(asistent.idAsistent == asis){
    res.send(true);
  }
  else{ res.send(false);}
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/jeliStudent/:idPredmeta/:idStudenta", async (req, res) => {
  try {
      var stud = req.params.idStudenta;
    const student = await db.PredmetStudent.findAll({
      where: { idPredmet: req.params.idPredmeta },
      attributes: ["idStudent"]
    });
    if(student == null){res.send("Ne postoji predmet");}
    for (let i = 0; i < student.length; i++) {
    if(student[i].idStudent == stud){
    res.send(true);
}}
  
  res.send(false);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});




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

app.get("/dohvatiSvePredmeteStudenta/:idStudenta", async (req, res) => {
  try {
    const predmeti = await db.PredmetStudent.findAll({
      where: { idStudent: req.params.idStudenta },
      attributes: ["idPredmet"]
    });
    var predmet = new Array();
    for (let i = 0; i < predmeti.length; i++) {
      predmet[i] = await db.Predmet.find({
        where: { id: predmeti[i].idPredmet },
        attributes: ["naziv"]
      });
    }
    res.send(JSON.stringify(predmet));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/dohvatiPredmeteKojeTrenutnoSlusa/:idStudenta", async (req, res) => {
  try {
    const predmeti = await db.PredmetStudent.findAll({
      where: { idStudent: req.params.idStudenta, idAkademskaGodina: 13 },
      attributes: ["idPredmet"]
    });
    var predmet = new Array();
    for (let i = 0; i < predmeti.length; i++) {
      predmet[i] = await db.Predmet.find({
        where: { id: predmeti[i].idPredmet },
        attributes: ["naziv"]
      });
    }
    res.send(JSON.stringify(predmet));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/dohvatiProfesora1/:profesorID", async (req, res) => {
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


app.get("/dohvatiIDPredmeta/:predmetNaziv", async (req, res) => {
  try {
    const predmet = await db.Predmet.find({
      where: {
        naziv: req.params.predmetNaziv
      }
    });
    res.send(JSON.stringify(predmet.id));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//Server
app.listen(port, () => console.log(`Server pokrenut na portu ${port}`));
//

module.exports = app;
