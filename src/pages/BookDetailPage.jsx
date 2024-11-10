import Header from "../components/organisms/Reusable/Header";
import Footer from "../components/organisms/Reusable/Footer";
import Main from "../layouts/Main";
import BookInfo from "../components/organisms/BookDetail/BookInfo";
import BookSynopsis from "../components/organisms/BookDetail/BookSynopsis";
import BookReviews from "../components/organisms/BookDetail/BookReviews";

const BookDetailPage = () => {
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <BookInfo />
                <BookSynopsis />
                <BookReviews />
            </Main>
            <Footer />
        </>
    );
};

export default BookDetailPage;
