import axios from "axios";

const fetchCategory = async () => {
    let config = {
        method: "get",
        url: import.meta.env.VITE_API_URL,
    };

    const res = await axios.request(config);
    return res.data;
};
const fetchQuestion = async (amount: number, category: string, difficulty: string) => {
    let config = {
        method: "get",
        url: import.meta.env.VITE_API_QUESTION_URL,
        params: {
            amount,
            category,
            difficulty,
            type: "multiple"
        }
    }

    const res = await axios.request(config);
    return res.data;
}
export default {
    fetchCategory,
    fetchQuestion
};