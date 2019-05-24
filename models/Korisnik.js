/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('korisnik', {
    id_korisnik: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    adresa: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ciklus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datum_rodjenja: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    drzavljanstvo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fotografija: {
      type: "LONGBLOB",
      allowNull: true
    },
    ime: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ime_prezime_majke: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ime_prezime_oca: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    indeks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    jmbg: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    kanton: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mjesto_rodjenja: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prezime: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    semestar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spol: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    telefon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    titula: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_odsjek: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id_uloga: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'korisnik'
  });
};

     
