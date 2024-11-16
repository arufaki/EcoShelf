import { useEffect, useState } from "react";
import { fetchBooksData } from "../api/booksApi";
import { API_URL } from "../utils/data/constants";

export const useFetchData = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const localBooks = localStorage.getItem("ecoBooks");
            if (localBooks && JSON.parse(localBooks).length > 0) {
                setBooks(JSON.parse(localBooks));
            } else {
                const response = await fetchBooksData(API_URL);
                localStorage.setItem("ecoBooks", JSON.stringify(response));
                setBooks(response);
            }
        };
        fetchBooks();
    }, []);
    return books;
};
