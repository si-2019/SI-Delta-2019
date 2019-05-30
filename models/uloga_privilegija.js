/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uloga_privilegija', {
    idUloga: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Uloga',
        key: 'iduloga'
      }
    },
    idPrivilegija: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'Privilegija',
        key: 'idprivilegija'
      }
    },
    id_uloga: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    id_privilegija: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'uloga_privilegija'
  });
};
