const Sequelize = require('sequelize')
const configDB = require('../config/database')

const connection = new Sequelize(configDB)

const Task = require('../models/tasks')

Task.init(connection)


module.exports = connection