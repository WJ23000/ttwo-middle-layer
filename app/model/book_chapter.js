/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book_chapter', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    chapter_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chapter_content: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'book_chapter'
  });

  Model.associate = function() {

  }

  return Model;
};
