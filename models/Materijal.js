/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Materijal', {
    idMaterijal: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    idPredmet: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Predmet',
        key: 'id'
      }
    },
    idTipMaterijala: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'TipoviMaterijala',
        key: 'idtipovimaterijala'
      }
    },
    datumObjave: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datumIzmjene: {
      type: DataTypes.DATE,
      allowNull: true
    },
    napomena: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    objavljeno: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sedmica: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'Materijal'
  });
};
