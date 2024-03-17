import axios from "axios";

const fetchAllUsers = async () => {
    const config = {
        method: "get",
        url: import.meta.env.VITE_API_URL+ "/users",
    };

    const res = await axios.request(config);
    return res.data;
};

export default {
    fetchAllUsers
};