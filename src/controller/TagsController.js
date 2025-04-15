const Tag = require('../models/tags');

module.exports = {
  async createTags(req, res) {
    try {
      const { name, color } = req.body;

      const tag = await Tag.create({ name, color });

      return res.status(200).json(tag);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};

