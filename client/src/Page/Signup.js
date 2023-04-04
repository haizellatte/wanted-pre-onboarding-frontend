//! 회원가입 페이이지
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from '../../config';
import * as S from "./StyledComponent";

const Signup = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState({
        email: "",
        password: "",
        validEmail: false,
        validPassword: false,
    })

    //input 요소 담기
    const handlInput = (e) => {
        {e.currentTarget.name === "email" ? ( setIsSignup({
            ...isSignup,
            ["email"]: e.currentTarget.value,
        })) : (setIsSignup({
            ...isSignup,
            ["password"]: e.currentTarget.value,
        }))}
    
    }
    //이메일, 비밀번호 유효성 검사
    const handleValidation = (e) => {
        if (isSignup.email.includes("@")) setIsSignup({
            ...isSignup,
            ["validEmail"]: true,
        }) 
        if(isSignup.password.trim().length >= 8) setIsSignup({
            ...isSignup,
            ["validPassword"]: true,
        }) 
    }


    //회원가입 버튼
    const handleSubmit = async () => {
        if (!isSignup.validEmail || !isSignup.validPassword) {
            
        }

        if (isSignup.validEmail && isSignup.validPassword) {
            await axios
            .post(
                `https://www.pre-onboarding-selection-task.shop/auth/signup`,
                { email: String(isSignup.email), password: String(isSignup.password) },
                {
                    headers: {"Content- Type": "application/json"}
        }
        )
        .then(() => {
            alert("회원가입 되었습니다.");
            navigate("/singin");
        })
        .catch((err) => {
            alert(err, "에러 발생");
        });
        }
        
    }


    return (
        <S.FlexWrapper>
            <S.Container>
                <S.Form onSubmit={handleSubmit}>
                    <div>SIGN UP</div>
                    <input data-testid="email-input" type="email" name="email" onChange={e => {
        handlInput(e)
        handleValidation(e)
                    }} required />
                    {!(isSignup.email.includes("@") && isSignup.email.includes(",")) ? <div>이메일은 '@'', '.' 를 포함해야 합니다.</div> : <></> }
                    <input data-testid="password-input" type="password" name="password" onChange={e => {
                        handlInput(e)
                        handleValidation(e)
                    }} required />
                    {isSignup.password.trim().length < 8 ? <div>비밀번호는 8자리 이상이어야 합니다.</div> : <></> }
                    <button data-testid="signup-button" disabled={!isSignup.validEmail || !isSignup.validPassword}>Submit</button>
                </S.Form>
            </S.Container>
        </S.FlexWrapper>
    );
};


export default Signup;