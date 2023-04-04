//! 로그인 페이지
import { useState, useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom";
import { API } from "../../config";
import axios from "axios";
import * as S from "../StyledComponent";


const Signin = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState({
        email: '',
        password: '',
    })

//input 요소 담기
    const handlInput = (e) => {
    const { name, value } = e.target;
        {name === "email" ? ( setIsSignup({
            ...isSignup,
            [name]:value,
        })) : (setIsSignup({
            ...isSignup,
            [name]:value,
        }))}
    }

    //유효성 검사
    const isInputValid =
        isSignup.email.includes('@') &&
        isSignup.email.includes('.') &&
        isSignup.password.trim().length >= 8;


    //로그인 버튼
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isInputValid) {
            alert("올바른 이메일, 비밀번호 형식을 입력해주세요.")
        }
            await axios({
                method: "post",
                url: API.signIn,
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    email :isSignup.email, password: isSignup.password
                }
            })
                .then((res) => {
                localStorage.setItem("accessToken", `Barear ${res.data.access_token}`);
                alert("로그인되었습니다.");
                navigate("/todo");
        })
        .catch((err) => {
            console.log(err);
        });
    }

//토큰이 있다면 -> /todo로 리다이렉트
    useEffect(() => {
 if (localStorage.getItem("accessToken")) {
        navigate("/todo");
    }
    },[])

    return (
        <S.FlexWrapper>
            <S.Container>
                <S.Form onSubmit={handleSubmit}>
                    <div>SIGN IN</div>
                        <input data-testid="email-input" type="email" name="email" value={isSignup.email} placeholder="Your Email" onChange={(e) => {
        handlInput(e)
                    }} />
                        <input data-testid="password-input" type="password" name="password" value={isSignup.password}  placeholder="Your Password" onChange={(e)=> {
                        handlInput(e)
                    }} />
                        <button data-testid="signin-button" disabled={!isInputValid} >Submit</button>
                </S.Form>
            </S.Container>
        </S.FlexWrapper>
    );
};

export default Signin;