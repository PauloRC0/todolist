const {Router} = require('express')


const UserController = require('../src/controller/UserController')
const routes = Router() 

routes.get('/tasks-list',UserController.listTasks)
routes.post('/tasks-create',UserController.createTasks)
routes.put('/tasks-update/:id',UserController.updateTasks) 
routes.delete('/tasks-delete/:id',UserController.deleteTasks)
module.exports = routes
