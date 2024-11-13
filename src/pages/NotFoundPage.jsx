import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-xl text-green-700 font-semibold font-poppins">404 Notfound Page</h1>
            <Link to="/" className="my-3 btn btn-success text-white">
                Return back
            </Link>
        </div>
    );
};

export default NotFoundPage;
