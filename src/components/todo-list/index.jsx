import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([
        {
            text: "Finish app",
            done: false
        },
        {
            text: "Eat",
            done: false
        },
        {
            text: "Sleep",
            done: false
        }
    ]);
    const [newTodo, setNewTodo] = useState("");


    const showTodos = () => {
        return todos.map((todo, i) => {
            return (
                <div key={i}>
                    {todo.text}
                    <button value={i} onClick={(e, i) => handleRemove(e, i)}>Remove</button>
                </div>)
        })
    }

    const handleAdd = () => {
        setTodos([...todos, { text: newTodo, done: false }]);
    }

    const handleRemove = (event) => {
        const ind = event.target.value;
        let tempList = [...todos]
        tempList.splice(ind, 1)
        setTodos(tempList);
    }
    console.log(newTodo)
    return (
        <div>
            <input type="text"
                id="lname"
                name="lname"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            ></input>
            <button onClick={handleAdd} >Add</button>
            <ul>
                {showTodos()}
            </ul>
        </div>
    )
}


export default TodoList;