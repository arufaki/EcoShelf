import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../api/supabaseClient";
import { useState } from "react";
import signUpUser from "../utils/function/supabase/signUpUser";

const RegisterPage = () => {
    const [register, setRegister] = useState({
        displayName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegister({
            ...register,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password } = register;
        await signUpUser(displayName, email, password, navigate);
    };

    return (
        <div className="hero bg-white h-screen overflow-y-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="card bg-white shrink-0 shadow-2xl h-full w-96">
                    <h1 className="text-green-700 font-poppins font-bold text-4xl mx-auto py-3">Sign Up</h1>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="full name"
                                name="displayName"
                                onChange={handleChange}
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
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
                                name="password"
                                onChange={handleChange}
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                                required
                            />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover text-green-600">
                                    Have an Account?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-green-600 hover:bg-green-700 text-white" type="submit">
                                Register
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

export default RegisterPage;
