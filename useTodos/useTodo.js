import { useReducer, useEffect } from "react";
import { todoReducer } from "./../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos]);
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload : todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        dispatch({
            type : '[TODO] Remove Todo',
            payload : todo.id
        });
    }

    const handleToggleTodo = (todo) => {
        dispatch({
            type : '[TODO] Toggle Todo',
            payload : todo.id
        });
    }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
