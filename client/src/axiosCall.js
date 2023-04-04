import axios from "axios";

const axiosCall = (url, method, data = null) => {
    return axios({
    method,
    url,
    data,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken"),
        },
    })
    .then((res) => res)
    .catch((err) => err);
};

export default axiosCall;