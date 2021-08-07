const {
  Model
} = require('sequelize');
const sequelize = require('../config/connection.js');
module.exports = (sequelize, DataTypes) => {
  class WorkoutType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  WorkoutType.init({
    WorkoutTypeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkoutType',
    timestamps: false,
  });
  return WorkoutType;
};