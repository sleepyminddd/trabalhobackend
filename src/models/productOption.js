module.exports = (sequelize, DataTypes) => {
    const ProductOption = sequelize.define('ProductOption', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shape: {
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square',
      },
      radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text',
      },
      values: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: true,
    });
    ProductOption.associate = (models) => {
      ProductOption.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
    };
  
    return ProductOption;
  };
  