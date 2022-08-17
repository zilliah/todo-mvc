const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

//already in the "todos" route
//don't need to add it in front of these routes!
router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router