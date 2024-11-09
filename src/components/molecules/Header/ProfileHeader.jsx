import { User } from "lucide-react";

const ProfileHeader = () => {
    return (
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle text-green-600 hover:bg-green-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost btn-circle text-green-600 hover:bg-green-50">
                    <div className="indicator">
                        <User size={22} className="text-green-600" />
                    </div>
                </button>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="text-green-600 hover:text-green-700 hover:bg-green-50">Profile</a>
                    </li>
                    <li>
                        <a className="text-green-600 hover:text-green-700 hover:bg-green-50">Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileHeader;
