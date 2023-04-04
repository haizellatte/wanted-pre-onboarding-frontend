import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:  center;
`;

export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content:  space-evenly;
  overflow-x: none;

  button {
    width: 20rem;
    height: 10rem;
    font-size: 2rem;
    border-radius: 9999px;
    cursor: pointer;
    line-height: 45px;
    color: #FFF;
    border: 2px solid #fff;
    background: #66d3f1;
    :hover {
    background: #FFF;
        color :#66d3f1;
    }
}
`;

export const Form = styled.form`
  display: flex;
  width: 50rem;
  height: 60rem;
  padding: 2rem 3rem;
  background-color: azure;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 

  div {
    font-size: 2rem;
  }

  input {
    width: 30rem;
    height: 4rem;
  }

  button {
    width: 10rem;
    height: 5rem;
  }
`;

