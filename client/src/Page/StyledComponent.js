import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content:  space-evenly;
  overflow-x: none;
`;

export const Button = styled.button`
    width: 20rem;
    height: 7rem;
    font-size: 2.5rem;
    font-weight: 1000;
    border-radius: 9999px;
    cursor: pointer;
    line-height: 45px;
    color: #FFF;
    border: 3px solid #fff;
    background: #f9feff5e;
    :hover {
    background: #FFF;
        color : ${(props) => props.color}
    }
`

export const Form = styled.form`
  display: flex;
  width: 50rem;
  height: 70rem;
  padding: 2rem 3rem;
  background-color: #f9feff5e;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 
  box-shadow: 5px 5px 10px -5px #b3b3b3ee;
  div {
    font-size: 2rem;
  }

  input {
    width: 33rem;
    height: 4.5rem;
    color: #c4c3ca;
    padding: 2rem;
  }

  button {
    display: flex;
    justify-content: center;
    border-radius: 15px;
    width: 15rem;
    height: 5rem;
  }
`;

