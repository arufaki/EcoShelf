import { Link, useNavigate } from "react-router-dom";   
import { useAppContext } from "../context/AppContext";
import signInUser from "../utils/function/supabase/signInUser";
import { useState } from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const { login } = useAppContext();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        setIsloading(true);
        const user = await signInUser(email, password, setError, setIsloading);
        if (user) {
            login(user);
            navigate("/");
        }
    };
    return (
        <div className="hero bg-white h-screen overflow-y-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="card bg-white shrink-0 shadow-2xl h-full w-96">
                    <h1 className="text-green-700 font-poppins font-bold text-4xl mx-auto py-3">Sign In</h1>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={handleChange}
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                onChange={handleChange}
                                name="password"
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div className="flex">
                            <label className="cursor-pointer label">
                                <span className="label-text text-green-600">Remember me</span>
                                <input type="checkbox" onChange={() => setRememberMe(true)} className="checkbox checkbox-success ml-6" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover text-green-700">
                                    Don't Have Account?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-green-600 hover:bg-green-700 text-white" disabled={isLoading} type="submit">
                                {isLoading ? <span className="loading loading-spinner loading-sm text-success"></span> : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left hidden lg:block w-[500px]">
                    <img src="public/images/png/ecoshelf-sopan.png" className="h-full w-full" alt="ecoshelf-character" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
