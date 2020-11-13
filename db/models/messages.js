"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.messages.belongsTo(models.topics, { foreignKey: "topicId" });
    }
  }
  messages.init(
    {
      messageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
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
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "messages",
    }
  );
  return messages;
};
