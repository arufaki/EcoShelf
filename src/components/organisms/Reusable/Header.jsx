import List from "../../molecules/Header/List";
import Logo from "../../molecules/Header/Logo";
import ProfileHeader from "../../molecules/Header/ProfileHeader";

const Header = ({ handleAbout }) => {
    return (
        <div className="navbar bg-white border-b max-w-[1440px] mx-auto">
            <List handleAbout={handleAbout} />
            <div className="navbar-center">
                <Logo />
            </div>
            <ProfileHeader />
        </div>
    );
};

export default Header;
