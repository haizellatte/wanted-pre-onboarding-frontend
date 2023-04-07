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
        await axiosCall(API.Todo, "post", {
                    todo : todoList
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <>
            <C.TodoHead>Todo List</C.TodoHead>
            <C.TodoListForm onSubmit={handleCreateTodo}>
                <C.TitleInput placeholder="Todo Title" data-testid="new-todo-input" onChange={handleInput} />
                <C.CreateButton data-testid="new-todo-add-button">+</C.CreateButton>
            </C.TodoListForm>
        </>
    );
};

export default CreateTodo;