const Sequelize = require("sequelize");
const sequelize = new Sequelize("TYQcLL35gV","TYQcLL35gV","BLysSj9ZrP",{ host:"37.59.55.185", dialect:"mysql"});
//const sequelize = new Sequelize("hXb0pLcW9N","hXb0pLcW9N","3VeAJRjpCp",{ host:"37.59.55.185", dialect:"mysql"});

const db={};
//3VeAJRjpCp
db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.Ispit = sequelize.import("../models/Ispit.js");
db.Predmet = sequelize.import("../models/Predmet.js");
db.Student = sequelize.import("../models/Korisnik.js");
db.Korisnik = sequelize.import("../models/Korisnik1.js");
db.IspitiRezultati = sequelize.import("../models/ispiti_rezultati.js");
db.IspitBodovi = sequelize.import("../models/IspitBodovi.js");
db.PredmetStudent=sequelize.import("../models/predmet_student.js");
db.Zadaca=sequelize.import("../models/Zadaca.js");

db.Student.belongsToMany(db.Ispit, {through: 'IspitiRezultati'});
db.Ispit.belongsToMany(db.Student, {through: 'IspitiRezultati'});






module.exports=db;

