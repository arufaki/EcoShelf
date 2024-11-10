import Card from "../components/molecules/ListBooks/Card";
import Footer from "../components/organisms/Reusable/Footer";
import Header from "../components/organisms/Reusable/Header";
import Main from "../layouts/Main";

const BooksPage = () => {
    const booksData = [
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            thumbnail: "http://books.google.com/books/content?id=f1gpEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
    ];

    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-green-700 px-5 mt-5">Books</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "10px",
                    }}
                    className="px-5 mx-auto py-14"
                >
                    {booksData.map((book, index) => (
                        <Card book={book} key={index} />
                    ))}
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default BooksPage;
