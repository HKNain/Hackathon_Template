import React from "react";
import img1 from "../../../public/login_img.jpg";

const Login = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-stone-900 to-black text-white fixed inset-0 w-screen h-screen flex flex-wrap">
            <div className="w-[750px] h-[760px] text-white mt-4 mb-10 ml-[10px]">
                <a href="/" className="font-semibold w-[125px] h-[30px] text-white cursor-pointer text-orange-100 rounded pl-3">Home</a>
                <div className="ml-[80px]">
                    <h1 className="font-bold text-5xl mt-[60px] ml-[110px] text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-200">Welcome back!</h1>
                    <div className="w-[400px] flex justify-center mt-10 ml-[100px]">
                        <p className="text-center">Simply your workflow and boost your productivity with <span className="font-semibold text-orange-200">Finfluencer's App</span>. Get started for free.</p>
                    </div>
                    <div>
                        <input placeholder="Username" className="bg-gray-100 mt-10 mb-2 mx-24 w-[400px] h-[50px] rounded-3xl pl-5 text-black border border-black"></input>
                    </div>
                    <div>
                        <input placeholder="Password" type="password" className="bg-gray-100 mt-2 mb-1 mx-24 w-[400px] h-[50px] rounded-3xl pl-5 text-black border border-black"></input>
                    </div>
                    <a  className="font-semibold text-sm ml-[365px] cursor-pointer hover:text-orange-100 text-gray-300">Forgot password?</a>
                    <div>
                        <button type="submit" className="bg-teal-200 mt-10 mb-10 mx-24 w-[400px] h-[45px] rounded-3xl text-black font-semibold">Login</button>
                    </div>
                    <div className="flex ml-[80px] mr-20">
                        <div className="bg-gray-500 w-[150px] h-[2px] mt-3"></div>
                        <span className="text-sm font-semibold mx-4">or continue with?</span>
                        <div className="bg-gray-500 w-[150px] h-[2px] mt-3"></div>
                    </div>
                    <div className="flex mt-10">
                        <button className="bg-orange-100 w-12 h-12 ml-[200px] rounded-3xl text-black text-2xl font-bold hover:bg-orange-300">G</button>
                        <button className="bg-orange-100 w-12 h-12 ml-7 rounded-3xl text-black text-2xl font-bold hover:bg-orange-300">F</button>
                        <button className="bg-orange-100 w-12 h-12 ml-7 rounded-3xl text-black text-2xl font-bold hover:bg-orange-300">I</button>
                    </div>
                    <div className="font-semibold text-sm mt-10 ml-[210px]">Not a member? <a className="text-teal-200 cursor-pointer">Register now</a></div>
                </div>
            </div>

            <div className="w-[635px] h-full mt-8">
                <div className="flex">
                    <img src={img1} alt="image" className="h-[760px] w-full"></img>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;