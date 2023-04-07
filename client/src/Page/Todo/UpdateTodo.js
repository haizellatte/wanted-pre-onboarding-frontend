import { useState } from 'react';
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
    //수정모드인지 아닌지
    const [isModified, setIsModified] = useState(false);

    //! 투두 input 수정하기
    const handleChangeTodo = (e) => {
        setUpdateTodo({
            ...updateTodo,
            ["todo"] : e.target.value
        })
    }
    
    //! 수정모드 전환
    const handleChangeModified = () => {
        setIsModified(!isModified);
    }

    //! 수정 취소
    const handleCancel = () => {
        setIsModified(!isModified);
            setUpdateTodo({
            ...updateTodo,
        })
    }

    //! 체크박스 상태 변경
    const handleCheck = async() => {
        await axiosCall(`${API.Todo}/${id}`, "put", {
            todo: updateTodo.todo ,
            isCompleted : !updateTodo?.isCompleted 
        }).then(() => {
            window.location.reload();
        });
    }

    //! 투두 업데이트 요청 보내기
    const handleUpdateTodo = async() => {
        await axiosCall(`${API.Todo}/${id}`, "put", {
            todo: updateTodo.todo ,
            isCompleted : isCompleted
        }).then(() => {
            window.location.reload();
        });
    }

    return (
        <div className='todoContent'>
            <li>
                <U.TodoWrapper>
                    <div onChange={handleCheck}>
                        {isCompleted ? <U.Checkbox type="checkbox" defaultChecked="check" /> : <U.Checkbox type="checkbox" defaultChecked="" />}
                    </div>
                    {/* 수정모드라면 -> input 수정 가능 */}
                    {!isModified ? 
                    // isCompleted가 true라면 -> 가운데 줄 긋기
                    !isCompleted ? (<U.ReadTitle>{todo}</U.ReadTitle>) :
                    (<U.DoneTitle>{todo}</U.DoneTitle>) : (
                            <U.UpdateTitle
                                data-testid="modify-input"
                                onChange={handleChangeTodo}
                                defaultValue={todo} />)}
                    {/* 수정모드라면 -> 제출/취소버튼 활성화 */}
                    {!isModified ? (<U.ModifyingButton
                                    data-testid="modify-button"
                                    onClick={handleChangeModified}
                                    >수정</U.ModifyingButton>) :
                                (<div className='editMode'>
                                <U.ModifyingDoneButton  data-testid="submit-button"
                                    onClick={() => { handleChangeModified(); handleUpdateTodo() }}
                                    >완료</U.ModifyingDoneButton>
                                <U.CancelButton data-testid="cancel-button"
                                    onClick={handleCancel}>취소</U.CancelButton>
                                </div>)}
                <DeleteTodo id={id} />
                </U.TodoWrapper>
            </li>
        </div>
    );
};

export default UpdateTodo;