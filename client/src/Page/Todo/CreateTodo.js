import { useState } from 'react';
import * as C from "../Styled/StyledComponent";
import { API } from "../../config";
import axiosCall from "../../axiosCall"

const CreateTodo = () => {
    const [todoList, setTodoList] = useState('')

    const handleInput = (e) => {
        setTodoList(e.target.value);
    }

    const handleCreateTodo = async(e) => {
        e.preventDefault();
        await axiosCall(API.createTodo, "post", {
                    todo : todoList
        }).then(res => {
            console.log(res.data)
        })
    }

    return (
        <C.CreateTodoWrapper>
                <C.TodoHead>Todo List</C.TodoHead>
                <C.TodoListForm onSubmit={handleCreateTodo}>
                    <C.TitleInput data-testid="new-todo-input" onChange={handleInput} />
                    <C.CreateButton data-testid="new-todo-add-button">+</C.CreateButton>
                </C.TodoListForm>
        </C.CreateTodoWrapper>
    );
};

export default CreateTodo;