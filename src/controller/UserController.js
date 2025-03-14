const { where } = require("sequelize");
const { up } = require("../database/migrations/20250215032153-create-tasks");
const Task = require("../models/tasks");
module.exports = {
  async createTasks(req, res) {
    try {
      const { title, status, priority, description } = req.body;

      const task = await Task.create({ title, status, priority, description });

      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async updateTasks(req, res) {
    try {
      const { id } = req.params;
      const { title, status, priority, description } = req.body;

      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(401).json({ error: "Tarefa não encontrada!" });
      }
      await task.update({ title, status, priority, description });

      return res.status(200).json(task);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listTasks(req, res) {
    try {
      const taks = await Task.findAll();

      if (!taks) {
        return res.status(200).json({ message: "nehuma tarefa encontrada" });
      }

      return res.status(200).json(taks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
