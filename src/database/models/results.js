// import { Model } from 'sequelize';


// module.exports = (sequelize, DataTypes) => {
//   class results extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   results.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     phoneNumber: DataTypes.STRING,
//     address: DataTypes.STRING,
//     diagnosis: DataTypes.STRING,
//     // for the pdf
//     pdf: DataTypes.BLOB,
//     status: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'results',
//   });
//   return results;
// };




import { Model } from 'sequelize';


module.exports = (sequelize, DataTypes) => {
  class results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  results.init({
    // patientId: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    user: DataTypes.STRING,
    // for the pdf
    pdf: DataTypes.STRING,
    image: DataTypes.STRING,
    // resultPicture: DataTypes.STRING,
    lastTime: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'results',
  });
  return results;
};