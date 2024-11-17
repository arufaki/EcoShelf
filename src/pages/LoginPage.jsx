import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import signInUser from "../services/supabase/signInUser";
import { Toast } from "../utils/function/toast";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { login } = useAppContext();

    const onSubmit = async (data) => {
        setIsloading(true);
        const user = await signInUser(data.email, data.password, setError, setIsloading);

        if (user) {
            login(user);
            navigate("/books");
            Toast.fire({
                icon: "success",
                title: "Login Success",
            });
        }
    };

    return (
        <div className="hero bg-white h-screen overflow-y-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="card bg-white shrink-0 shadow-2xl h-full w-96">
                    <h1 className="text-green-700 font-poppins font-bold text-4xl mx-auto py-3">Sign In</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                // name="email"
                                {...register("email", {
                                    required: "Email Address is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Please enter a valid email address",
                                    },
                                })}
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                })}
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
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
                    <img src="/images/webp/ecoshelf-sopan.webp" className="h-full w-full" alt="ecoshelf-character" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
