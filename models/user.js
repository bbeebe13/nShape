'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  };
  User.init({
    Username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  },
  {
      hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate:async (user) => {
        if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  }
  , {
    sequelize,
    modelName: 'User',
  });
  return User;
};