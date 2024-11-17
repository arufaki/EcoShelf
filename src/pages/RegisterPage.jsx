import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import signUpUser from "../services/supabase/signUpUser";
import { useForm } from "react-hook-form";
import { Toast } from "../utils/function/toast";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { displayName, email, password } = data;
        await signUpUser(email, password, displayName, navigate);
        Toast.fire({
            icon: "success",
            title: "Register Account Successfully",
        });
    };

    return (
        <div className="hero bg-white h-screen overflow-y-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className="card bg-white shrink-0 shadow-2xl h-full w-96">
                    <h1 className="text-green-700 font-poppins font-bold text-4xl mx-auto py-3">Sign Up</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="full name"
                                {...register("displayName", { required: "Full Name is Required", minLength: { value: 3, message: "Full name must be at least 3 characters" } })}
                                className="input input-bordered bg-white border-green-500 focus:ring-2 focus:ring-green-500"
                            />
                            {errors.displayName && <p className="text-red-500 text-sm">{errors.displayName.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-700">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
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
                    <img src="/images/webp/ecoshelf-sopan.webp" className="h-full w-full" alt="ecoshelf-character" />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
