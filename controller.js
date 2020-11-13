const models = require("./db/models/index");

const publishTopic = async (req, res) => {
  try {
    let { topic } = req.params;
    topic = topic.toLowerCase();
    const [checkTopic] = await models.topics.findOrCreate({ where: { topic } });
    const { topicId } = checkTopic.dataValues;
    const { isNewRecord } = checkTopic._options;
    let newMessage;
    if (isNewRecord) {
      newMessage = await models.messages.create(
        {
          topicId,
          body: "hello",
        },
        {
          attributes: ["body"],
        }
      );
    } else {
      newMessage = await models.messages.findOne({
        where: { topicId },
        attributes: ["body"],
      });
    }

    return res.status(200).json({ message: newMessage.body });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const subscribeTotopic = async (req, res) => {
  try {
    let { topic } = req.params;
    topic = topic.toLowerCase();
    const { topicId } = await models.topics.findOne({ where: { topic } });
    const subscribe = await models.events.create({ topicId, event: "subscription" });
    const allEvents = await models.events.findAll({
      where: { topicId },
      attributes: ["event"]
    });
    // console.log(checkTopic)
    return res.status(200).json({ events: { topic, allEvents} });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  publishTopic,
  subscribeTotopic,
};
