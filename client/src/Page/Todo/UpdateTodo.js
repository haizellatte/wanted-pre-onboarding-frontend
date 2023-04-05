import { useState,useEffect } from 'react';
import * as U from "../Styled/StyledComponent";
import { API } from "../../config";
import axiosCall from "../../axiosCall";
import DeleteTodo from "./DeleteTodo";

const UpdateTodo = ({todolist}) => {
    const { id, todo, isCompleted } = todolist;
    const [updateTodo, setUpdateTodo] = useState({
        id: id,
        todo: todo,
        isCompleted : isCompleted
    });
    //수정했는지 안했는지
    const [isModified, setIsModified] = useState(false);

    //input 수정하기
    const handleChangeTodo = (e) => {
            setUpdateTodo({
            ...updateTodo,
            ["todo"] : e.target.value
        })
    }
    const handleChangeModified = () => {
        setIsModified(!isModified);
    }

    const handleCancel = (e) => {
        setIsModified(!isModified);
        setUpdateTodo({
            ...updateTodo,
        })
    }

    //투두 업데이트 요청 보내기
    const handleUpdateTodo = async() => {
        await axiosCall(`${API.Todo}/${id}`, "put", {
            todo: updateTodo.todo ,
            isCompleted : updateTodo.isCompleted
        }).then((res) => {
            if (res.status === 200||201) {
                alert("수정완료")
            }
            window.location.reload();
        });
    }

    return (
        <div className='todoContent'>
            <li>
            <U.TodoWrapper>
                {isCompleted ? (<input type="checkbox" checked="checked" />) : (<input type="checkbox" />)}
                {!isModified ?
                    (<U.ReadTitle>{todo}</U.ReadTitle>) : (
                        <U.UpdateTitle data-testid="modify-input" onChange={handleChangeTodo} value={updateTodo.todo}/>
                    )}
                {/* 수정모드라면 */}
                {!isModified ? (<U.ModifyingButton data-testid="modify-button" onClick={handleChangeModified}>edit</U.ModifyingButton>) : (
                        <div className='editMode'>
                        <U.ModifyingDoneButton  data-testid="submit-button"
                        onClick={() => {
                handleChangeModified();
                            handleUpdateTodo()
                        }}>제출</U.ModifyingDoneButton>
                        <U.CancelButton  data-testid="cancel-button" onClick={() => {
                handleCancel() }}>취소</U.CancelButton>
                </div>
                )}
                <DeleteTodo id={id} />
            </U.TodoWrapper>
            </li>
            </div>
    );
};

export default UpdateTodo;