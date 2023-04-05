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

export const CreateContainer = styled.div`
  display: flex;
  background-color: #f9feff5e;
  width: 60rem;
  height: 70rem;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;

  .todoContent {
    display: flex;
    margin-top : 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const TodoHead = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem 2rem;
`;

export const TodoListForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 52rem;
  margin-bottom: 2rem;
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content : space-around;
  margin: 0.1rem 0 0 0.5rem;
  padding: 1rem 0.3rem;
  background-color: #f4f4f496;
  border-radius: 10px;
  width : 52rem;
  height: 4rem;

  .editMode {
    flex-direction: row;
  }
`;

export const ReadTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 28rem;
  font-size: 2rem;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 5rem;
  height: 4rem;
  font-size: 3rem;
  background-color: #3366FF;
  color: #ffffff;
  cursor: pointer;
`;

export const ReadLine = styled.div`
border-top: 1px slid black;
width : 30rem;
`;

export const ModifyingButton = styled.button`
  border: 0;
  border-radius: 10px;
  width: 4.5rem;
  height: 2rem;
  font-size: 1.3rem;
  background-color: #66d3f1;
  margin-left: 0.7rem;
  color: white;
  cursor: pointer;
`;

export const ModifyingDoneButton = styled.button`
  border: 0;
  border-radius: 10px;
  width: 4.5rem;
  height: 2rem;
  font-size: 1.3rem;
  background-color: #41b979;
  margin-left: 0.7rem;
  color: white;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: 0;
  border-radius: 10px;
  width: 4.5rem;
  height: 2rem;
  font-size: 1.3rem;
  background-color: #8E8E8E;
  margin-left: 0.7rem;
  color: white;
  cursor: pointer;
`;

export const TitleInput = styled.input`
  width: 45rem;
  border: none;
  background-color: #f4f4f4;
  padding : 0rem 1rem;
  height: 4rem;
  margin: 0.5rem;
  font-size: 2rem;
`;

export const UpdateTitle = styled.input.attrs(props => ({
    name: 'updateTitle',
}))`
  width: 30rem;
  height: 3rem;
  padding: 0.2rem 1rem;
  font-size: 1.8rem;
  border: none;
  background-color: #f4f4f4;
`;

