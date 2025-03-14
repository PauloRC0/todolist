const {Router} = require('express')


const UserController = require('../src/controller/UserController')
const routes = Router() 

routes.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll()

    return res.json(tasks)
})

routes.post('/tasks-create',UserController.createTasks)
routes.put('/tasks-update/:id',UserController.updateTasks) 
module.exports = routes
