import axios from "axios";

export const fetchBooksData = async (API_URL) => {
    try {
        const response = await axios.get(API_URL);
        return response.data.items;
    } catch (error) {
        console.error("Your Error :", error);
        return [];
    }
};
