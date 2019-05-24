/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issue_category', {
    idCategory: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    idIssue: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'Issue',
        key: 'idissue'
      }
    }
  }, {
    tableName: 'issue_category'
  });
};
