//! 로그인 페이지
import React from 'react';
import * as S from "./StyledComponent";


const Signin = () => {
    return (
       <S.FlexWrapper>
            <S.Container>
                <S.Form>
                    <div>SIGN IN</div>
                    <input data-testid="email-input" />
                    <input data-testid="password-input" />
                    <button data-testid="signin-button">Submit</button>
                </S.Form>
            </S.Container>
        </S.FlexWrapper>
    );
};

export default Signin;