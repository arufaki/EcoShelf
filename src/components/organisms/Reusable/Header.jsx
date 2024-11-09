import List from "../../molecules/Header/List";
import Logo from "../../molecules/Header/Logo";
import ProfileHeader from "../../molecules/Header/ProfileHeader";

const Header = () => {
    return (
        <div className="navbar bg-white border-b">
            <List />
            <div className="navbar-center">
                <Logo />
            </div>
            <ProfileHeader />
        </div>
    );
};

export default Header;
