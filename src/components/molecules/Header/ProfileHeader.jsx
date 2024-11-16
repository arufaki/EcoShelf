import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import signOutUser from "../../../services/supabase/signOutUser";
import { logoutAlert } from "../../../utils/function/toast";

const ProfileHeader = () => {
    const { user, logout } = useAppContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutAlert(() => {
            logout();
            signOutUser();
            navigate("/login");
        });
    };
    return (
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost btn-circle text-green-600 hover:bg-green-50">
                    <div className="indicator">
                        <User size={22} className="text-green-600" />
                    </div>
                </button>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {user == null ? (
                        <Link to="/login">
                            <li>
                                <p className="text-green-600 hover:text-green-700 hover:bg-green-50">Login</p>
                            </li>
                        </Link>
                    ) : (
                        <>
                            <Link to={`/profile/${user.id}`}>
                                <li>
                                    <p className="text-green-600 hover:text-green-700 hover:bg-green-50">Profile</p>
                                </li>
                            </Link>
                            <li onClick={handleLogout}>
                                <a className="text-green-600 hover:text-green-700 hover:bg-green-50">Log Out</a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProfileHeader;
