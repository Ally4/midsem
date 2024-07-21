import { Model } from 'sequelize';


module.exports = (sequelize, DataTypes) => {
  class orderFromHospitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderFromHospitals.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    price: DataTypes.STRING,
    location: DataTypes.STRING, 
    phoneNumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'orderFromHospitals',
  });
  return orderFromHospitals;
};
