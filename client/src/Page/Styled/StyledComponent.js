import styled from "styled-components";
import theme from "./commons"

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

export const CreateTodoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CreateContainer = styled.div`
  display: flex;
  background-color: #f9feff5e;
  width: 50rem;
  height: 70rem;
  align-items: center;
  flex-direction: column;
`;

export const TodoHead = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem 2rem;
`;

export const TodoListForm = styled.form`
  display: flex;
  text-align: center;
  flex-direction: ro;
  align-items: center;
`;

export const TitleInput = styled.input.attrs(props => ({
  placeholder: 'Todo Title',
}))`
  padding : 0rem 1rem;
  width: 35rem;
  height: 3rem;
  margin: 0.5rem;
  font-size: 1rem;
`;


export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 5rem;
  height: 3rem;
  font-size: 3rem;
  background-color: #3366FF;
  color: #ffffff;
  cursor: pointer;
`;

export const ReadLine = styled.div`
border-top: 1px slid black;
width : 30rem;
`;
