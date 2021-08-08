'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoggedWorkouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(LoggedWorkouts, {
        through: LoggedWorkouts,
      });
      // Tags belongToMany Products (through LoggedWorkouts)
      Tag.belongsToMany(Product, {
        through: LoggedWorkouts,
      });
    }
  };
  LoggedWorkouts.init({
    user_id: 
      {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
      key: "id",
    },
    },
    Workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
      key: "id",
    },
    },
    Duration: DataTypes.INTEGER,
    Intensity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LoggedWorkouts',
    underscored: true,
  });
  return LoggedWorkouts;
};