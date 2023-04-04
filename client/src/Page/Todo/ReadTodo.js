import { useState } from 'react';
import * as R from "../Styled/StyledComponent";
import { API } from "../../config";
import axiosCall from "../../axiosCall"
import { useEffect } from 'react';

const ReadTodo = () => {
    const [todos, setTodos] = useState({})    
    
    useEffect(() => {
    const getTodos = async() => {
        await axiosCall(API.getTodos, "get").then((res) => setTodos(res.data));
    }
        getTodos();
    },[])
    
    console.log(todos)

    return (
        <R.CreateTodoWrapper>
            {todos.map((id, todo) => {
                <div key={id}>{todo}</div>
            })}
        </R.CreateTodoWrapper>
    );
};

export default ReadTodo;