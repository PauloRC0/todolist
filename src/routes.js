const {Router} = require('express')
const Task = require('./models/tasks')
const routes = Router() 

routes.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll()

    return res.json(tasks)
})

routes.post('/tasks', async (req, res) => {
    const {title, status, priority, description} = req.body
    
    const task = await Task.create({title, status, priority, description})

    return res.json(task)
})
module.exports = routes
