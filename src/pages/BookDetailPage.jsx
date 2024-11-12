import Header from "../components/organisms/Reusable/Header";
import Footer from "../components/organisms/Reusable/Footer";
import Main from "../layouts/Main";
import BookInfo from "../components/organisms/BookDetail/BookInfo";
import BookSynopsis from "../components/organisms/BookDetail/BookSynopsis";
import BookReviews from "../components/organisms/BookDetail/BookReviews";
import { useLocation } from "react-router-dom";

const BookDetailPage = () => {
    const location = useLocation();
    const book = location.state;
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <BookInfo book={book} />
                <BookSynopsis book={book} />
                <BookReviews title="Reader Reviews" userProfile={false} />
            </Main>
            <Footer />
        </>
    );
};

export default BookDetailPage;
