import styled, { css } from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
`;

export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content:  space-evenly;
`;


export const Container2 = styled.div`
  display: flex;
  position: absolute;
  top : 15%;
  min-height: 60vh;
  align-items: center;
  justify-content:  space-evenly;
  flex-direction: column;
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

export const Title = styled.div`
font-family: 'Abril Fatface', cursive;
font-size: 4rem;
margin: 3rem 0 7rem;
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
  height: 50rem;
  padding: 2rem 3rem;
  background-color: #f9feff5e;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 10px -5px #b3b3b3ee;

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px soild #b3b3b3ee;
    background-color: transparent;
    width: 35rem;
    height: 4.5rem;
    font-size: 1.8rem;
    padding: 2rem;
    margin-bottom: 4rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Titillium Web', sans-serif;
    background-color : white;
    border : 1px soild #b3b3b3ee;
    margin-top: 5rem;
    font-size: 2rem;
    width: 15rem;
    height: 5rem;
    cursor: pointer;
  }
`;

export const TodoHead = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 4rem;
  margin: 3rem 0rem;
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
  margin: 0 0 0 0.5rem;
  background-color: #f4f4f496;
  width : 52rem;
  height: 4.2rem;

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

export const DoneTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 28rem;
  font-size: 2rem;
  text-decoration:line-through;
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
  border-radius: 20px;
  width: 4.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  background-color: #66d3f1;
  margin-left: 0.7rem;
  color: white;
  cursor: pointer;
`;

export const ModifyingDoneButton = styled.button`
  border: 0;
  border-radius: 20px;
  width: 4.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  background-color: #41b979;
  margin-left: 0.7rem;
  color: white;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: 0;
  border-radius: 20px;
  width: 4.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  background-color: #8E8E8E;
  margin-left: 0.7rem;
  color: white;
  cursor: pointer;
`;

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 5rem;
  font-size: 2.5rem;
  color : rgb(90, 156, 254);
  cursor: pointer;
  border: 1px solid #fff;
    background: #f9feff5e;
    :hover {
    background: #FFF;
    }
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

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  display: flex;
  cursor: pointer;
`;

export const UpdateTitle = styled.input.attrs(props => ({
    name: 'updateTitle',
}))`
  width: 30rem;
  height: 3rem;
  padding: 0rem 1rem;
  font-size: 2rem;
  border: none;
  background-color: #f4f4f4;
`;


