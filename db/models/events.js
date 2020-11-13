"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.events.belongsTo(models.topics, { foreignKey: "topicId" });
    }
  }
  events.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      topicId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "topics",
          key: "topicId",
        },
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "events",
    }
  );
  return events;
};
