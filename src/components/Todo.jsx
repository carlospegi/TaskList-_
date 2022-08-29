import React, { useState } from 'react'

const Todo = ({ todo, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);



    function FormEdit() {
        const [newValue, setNewValue] = useState(todo.title);


        function handleChange(e) {
            const value = e.target.value
            setNewValue(value)
        }

        function handleClickUpdateTodo() {
            onUpdate(todo.id, newValue)
            setIsEdit(false)
        }


        return (
            <div className='todo' >

                <form className='todoUpdateForm'>
                    <input className='todoInfo' onChange={handleChange} type="text" placeholder='Update todo' value={newValue} ></input>
                    <button className='button' onClick={handleClickUpdateTodo} > Update</button>
                </form>
            </div>
        )
    }
    function TodoElement() {


        return (
            <div className='todoInfo'>
                <span className='todoTitle'>
                    {todo.title}
                </span>
                <button onClick={() => setIsEdit(true)} className='button' >Edit</button>
                <button onClick={() => onDelete(todo.id)} className='button delete' >Delete</button>
            </div>
        )
    }

    return (

        <div className='todo'>

            {
                isEdit ? <FormEdit /> : <TodoElement />

            }
        </div>


    )
}

export default Todo
