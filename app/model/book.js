/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    sub_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    autor: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    describe: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    read_count: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    free_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'book',
  });

  Model.associate = function() {

  };

  return Model;
};
