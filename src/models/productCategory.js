module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    }, {
      timestamps: false,
    });
    ProductCategory.associate = (models) => {
      ProductCategory.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product',
      });
      ProductCategory.belongsTo(models.Category, {
        foreignKey: 'category_id', 
        as: 'category',
      });
    };
  
    return ProductCategory;
  };
  