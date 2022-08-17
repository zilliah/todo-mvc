const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            //this is different...
            //previously, had:
            //...await db.collection("todos").find().toArray()
            //look, there's a MODEL!
            //mongoose!
            //stuff talking to the DB is NOT in the controller!
            //have the MODEL for talking to the DB
            //DB stuff all goes into "Todo" (required at top!)
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            //create uses schema in Todo.js
            //if didn't match schema, would reject
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            //redirect back to todos, not / !
            //ie, refresh the page
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    