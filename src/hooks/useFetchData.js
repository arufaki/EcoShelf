import { useEffect, useState } from "react";
import { fetchBooksData } from "../api/booksApi";
import API_URL from "../utils/data/constants";

export const useFetchData = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const localBooks = localStorage.getItem("ecoBooks");
            if (localBooks) {
                setBooks(JSON.parse(localBooks));
            } else {
                const response = await fetchBooksData(API_URL);
                const extractBooks = response.map((books) => books.volumeInfo);
                localStorage.setItem("ecoBooks", JSON.stringify(extractBooks));
                setBooks(extractBooks);
            }
        };
        fetchBooks();
    }, []);
    return books;
};
