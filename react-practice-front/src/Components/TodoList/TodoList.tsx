import React from "react";
import './TodoList.css'

type todoType = {
    id: number
    description: string
}

const Todo: React.FC<{
    todo: todoType
    handleRemoveTodo: (todoId: number) => void
}> = ({todo, handleRemoveTodo}) => {

    const handleRemoveButtonClick = () => {
        handleRemoveTodo(todo.id);
    }

    return (
        <>
            <li 
                key={todo.id}
            ><span className="todo">{todo.description}</span>
            <button 
                className="remove-button"
                onClick={handleRemoveButtonClick}
            >Remove</button>      
            </li>
        </>
    )
}


export default function TodoList() {

    const [ todoList, setTodoList ] = React.useState([] as todoType[]);
    const [ todo, setTodo ] = React.useState("");
    const title = "Todo List";

   const handleTodoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const todo = event.target.value
        setTodo(todo);
   } 

   const handleAddTodoClick = () => {
        const newTodoList = [
            ...todoList, {
            id: todoList.length,
            description: todo
        }]
        setTodoList(newTodoList as todoType[]);
        setTodo("");
   }

   const handleRemoveTodo = (todoId: number) => {
        const updatedTodoList = todoList.filter(todo => todo.id != todoId)
        setTodoList(updatedTodoList);
   }

    return (
        <>
        <h2 className="section-title">{title}</h2>
        <input
            type="text"
            className="input-box"
            placeholder="Add todo"
            onChange={handleTodoInputChange}
            value={todo}
        ></input>
        <button 
            className="button"
            onClick={handleAddTodoClick}
        >Add Todo</button>
        <ul>
            {todoList.map((todo ) => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    handleRemoveTodo={handleRemoveTodo}
                />
            ))}
        </ul>
        </>
    )
}   