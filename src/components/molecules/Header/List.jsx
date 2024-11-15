import { Link, useLocation } from "react-router-dom";

const List = ({ handleAbout }) => {
    const location = useLocation();
    return (
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-green-600 hover:bg-green-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <Link to="/">
                        <li>
                            <p className="text-green-600 hover:text-green-700 hover:bg-green-50">Homepage</p>
                        </li>
                    </Link>
                    <Link to="/books">
                        <li>
                            <p className="text-green-600 hover:text-green-700 hover:bg-green-50">Books</p>
                        </li>
                    </Link>
                    {location.pathname === "/" && (
                        <li>
                            <p className="text-green-600 hover:text-green-700 hover:bg-green-50" onClick={handleAbout}>
                                About
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default List;
