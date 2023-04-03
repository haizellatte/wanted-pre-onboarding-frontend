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

