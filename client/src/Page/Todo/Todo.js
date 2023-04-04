import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as T from "../Styled/StyledComponent";
import CreateTodo from "./CreateTodo";
import ReadTodo from "./ReadTodo";


const Todo = () => {
    const navigate = useNavigate();
    
    //토큰이 없다면 -> /signin로 리다이렉트
    useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
        navigate("/signin");
    }
    },[])

    return (
        <T.CreateTodoWrapper>
            <T.CreateContainer>
                <CreateTodo />
                <ReadTodo />
            </T.CreateContainer>
            </T.CreateTodoWrapper>
    );
};

export default Todo;

