module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define('ProductImage', {
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
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: true,
    });
  
    ProductImage.associate = (models) => {
      ProductImage.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
    };
  
    return ProductImage;
  };  