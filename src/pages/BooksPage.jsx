import { useState } from "react";
import Card from "../components/molecules/ListBooks/Card";
import Footer from "../components/organisms/Reusable/Footer";
import Header from "../components/organisms/Reusable/Header";
import { useAppContext } from "../context/AppContext";
import Main from "../layouts/Main";
import { Pagination } from "@mui/material";

const BooksPage = () => {
    const { books } = useAppContext();
    const [page, setPage] = useState(1);

    const cardPerPage = 10;
    const offset = (page - 1) * cardPerPage;
    const currentCards = books.slice(offset, offset + cardPerPage);

    const handleChange = (e, value) => {
        setPage(value);
    };
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-green-700 px-5 mt-5">Books</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                        gap: "10px",
                    }}
                    className="px-5 mx-auto py-14"
                >
                    {currentCards.map((book, index) => (
                        <Card book={book} key={index} />
                    ))}
                </div>
                <div className="w-full flex justify-center mb-10">
                    <Pagination count={Math.ceil(books.length / cardPerPage)} page={page} onChange={handleChange} color="success" className="text-center" />
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default BooksPage;
