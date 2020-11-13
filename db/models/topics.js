"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.topics.hasMany(models.messages, { foreignKey: "topicId" });
      models.topics.hasMany(models.events, { foreignKey: "topicId" });
    }
  }
  topics.init(
    {
      topicId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "topics",
    }
  );
  return topics;
};
