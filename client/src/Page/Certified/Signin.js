//! 로그인 페이지
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { API } from "../../config";
import axios from "axios";
import * as S from "../Styled/StyledComponent";

const Signin = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState({
        email: '',
        password: '',
    })
    const { email, password } = isSignup;

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
        email.includes('@') &&
        password.trim().length >= 8;


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
                    email :email, password: password
                }
            })
                .then((res) => {
                localStorage.setItem("accessToken", `Bearer ${res.data.access_token}`);
                alert("로그인되었습니다.");
                navigate("/todo");
        })
        .catch(() => {
            alert("이메일 또는 비밀번호가 일치하지 않습니다.");
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
            <S.Container2>
                <S.Form onSubmit={handleSubmit}>
                    <S.Title>SIGN IN</S.Title>
                        <input data-testid="email-input" type="email" name="email" value={email} placeholder="Your Email" onChange={(e) => {
        handlInput(e)
                    }} />
                        <input data-testid="password-input" type="password" name="password" value={password}  placeholder="Your Password" onChange={(e)=> {
                        handlInput(e)
                    }} />
                        <button data-testid="signin-button" disabled={!isInputValid} >Submit</button>
                </S.Form>
                <Link to="/">
                <S.MainButton>Main</S.MainButton>
                </Link>
            </S.Container2>
        </S.FlexWrapper>
    );
};

export default Signin;