const {Router} = require('express')


const TaskController = require('../src/controller/TaskController')
const routes = Router() 

routes.get('/tasks-list',TaskController.listTasks)
routes.post('/tasks-create',TaskController.createTasks)
routes.put('/tasks-update/:id',TaskController.updateTasks) 
routes.delete('/tasks-delete/:id',TaskController.deleteTasks)
module.exports = routes
