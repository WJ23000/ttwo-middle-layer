/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('vip_order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    count: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_refund: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ok_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'vip_order'
  });

  Model.associate = function() {

  }

  return Model;
};
