import { useState,useEffect } from 'react';
import { API } from "../../config";
import axiosCall from "../../axiosCall"
import UpdateTodo from './UpdateTodo';

const ReadTodo = () => {
    const [todos, setTodos] = useState([])    
    
    useEffect(() => {
    const getTodos = async() => {
        await axiosCall(API.Todo, "get").then((res) => setTodos(res.data));
    }
        getTodos();
    },[])
    
    console.log(todos)

    return (
        <>
            {todos && todos.map((todolist, idx) => (
                <UpdateTodo key={idx} todolist={todolist}  />
            ))}
        </>
    );
};

export default ReadTodo;