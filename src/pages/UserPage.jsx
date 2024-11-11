import BookReviews from "../components/organisms/BookDetail/BookReviews";
import UserProfile from "../components/organisms/ProfileUser/UserProfile";
import WishlistCard from "../components/organisms/ProfileUser/WishlistCard";
import Footer from "../components/organisms/Reusable/Footer";
import Header from "../components/organisms/Reusable/Header";
import Main from "../layouts/Main";

const UserPage = () => {
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                <UserProfile />
                <WishlistCard />
                <BookReviews title="Review History" userProfile={true} />
            </Main>
            <Footer />
        </>
    );
};

export default UserPage;
