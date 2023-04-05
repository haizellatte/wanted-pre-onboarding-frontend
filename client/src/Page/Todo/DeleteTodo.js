import styled from 'styled-components';
import { API } from "../../config";
import axiosCall from "../../axiosCall"
import { TiDeleteOutline } from 'react-icons/ti';

const DeleteTodo = ({ id }) => {

    const handleDeleteTodo = async() => {
        await axiosCall(`${API.Todo}/${id}`, "delete").then((res) => {
            if (res.status === 204) {
                alert("삭제되었습니다.")
            }
            // window.location.reload();
        });
    }

    return (
        <DeleteButton data-testid="delete-button" 
            onClick={() => {
            handleDeleteTodo();
        }}
        ><TiDeleteOutline size="22" />
        </DeleteButton>
    );
};

const DeleteButton = styled.div`
    display : flex;
    color : red;
    cursor: pointer;
`
export default DeleteTodo;
