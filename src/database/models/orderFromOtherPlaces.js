import { Model } from 'sequelize';


module.exports = (sequelize, DataTypes) => {
  class OrderFromOtherPlaces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderFromOtherPlaces.init({
    testType: DataTypes.STRING,
    awaitTime: DataTypes.STRING,
    Price: DataTypes.STRING,
    facilityName: DataTypes.STRING,
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'OrderFromOtherPlaces',
  });
  return OrderFromOtherPlaces;
};
