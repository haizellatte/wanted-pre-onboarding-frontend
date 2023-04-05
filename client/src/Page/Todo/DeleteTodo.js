import styled from 'styled-components';
import { API } from "../../config";
import axiosCall from "../../axiosCall"
import axios from "axios";
import { MdDelete } from 'react-icons/md';


const DeleteTodo = ({ id }) => {

    const handleDeleteTodo = async () => {
        await axios({
                method: "delete",
                url: `${API.Todo}/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                if (res.status === 204) {
                        alert("삭제되었습니다.")
                        window.location.reload();
                    }
        })
        .catch((err) => {
            console.log(err);
        });
    }



    return (
        <DeleteButton data-testid="delete-button" 
            onClick={() => {
            handleDeleteTodo();
        }}
        >
            <MdDelete size="22" />
        </DeleteButton>
    );
};

const DeleteButton = styled.div`
    display : flex;
    color : #d0d3d6;
    cursor: pointer;
    &:hover {
    color: #ff6b6b;
    }
`
export default DeleteTodo;
