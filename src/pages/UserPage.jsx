import BookReviews from "../components/organisms/BookDetail/BookReviews";
import UserProfile from "../components/organisms/ProfileUser/UserProfile";
import Footer from "../components/organisms/Reusable/Footer";
import Header from "../components/organisms/Reusable/Header";
import Main from "../layouts/Main";
import Wishlist from "../components/organisms/ProfileUser/Wishlist";

const UserPage = () => {
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <UserProfile />
                <Wishlist />
                <BookReviews title="Review History" userProfile={true} filterByUser={true} />
            </Main>
            <Footer />
        </>
    );
};

export default UserPage;
