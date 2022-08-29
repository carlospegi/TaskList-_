import { useState } from "react";
import Todo from "./Todo";
import './todoApp.css'
export default function TodoApp() {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false

        }
        
        title && setTodos([...todos, newTodo])
        setTitle('')
        
          

        

        /* forma 2
        
        const temp = [...todos]
        temp.unshift(newTodo)
        setTodos(temp)
        
        */
    }
    function handleChange(e) {

        const value = e.target.value

        setTitle(value)

    }

    function handleUpdate(id, value) {
        const temp = [...todos]
        const taskOld = todos.find(task => task.id === id)
        taskOld.title = value
        setTodos(temp)

    }

    function deleteTask(id) {
        const temp = todos.filter(task => task.id !== id)
        setTodos(temp)
    }

    return (
        <div className="todoContainer">
            <form onSubmit={handleSubmit} className="todoCreateForm" >

                <input type="text" onChange={handleChange} className="todoInput" value={title} />
                <input type="submit" className="button create" value="Create Todo" />

            </form>
            <div className="todosContainer" >

                {
                    todos.map(todo => (

                        <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={deleteTask} />
                    ))

                }
            </div>
        </div>
    )
}