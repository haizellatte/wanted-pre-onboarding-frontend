import { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
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
        <T.FlexWrapper>
            <T.Container2>
            <T.CreateContainer>
                <CreateTodo />
                <ReadTodo />
            </T.CreateContainer>
                 <Link to="/">
                <T.MainButton>Main</T.MainButton>
                </Link>
            </T.Container2>
            </T.FlexWrapper>
    );
};

export default Todo;

