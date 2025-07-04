import React from "react";
import image from "../../../public/signup_img.jpg";

const SignUp = () => {
    return (
        <div className="bg-gradient-to-r from-black to-stone-900 text-white fixed inset-0 w-screen h-screen flex flex-wrap">
            <div className="w-[600px] h-[720px] mt-8 mb-10 ml-10">
                <div className="w-[600px] h-[760px]">
                    <img src={image} alt="image" className="w-full h-full rounded-3xl"></img>
                </div>
            </div>

            <div className="h-full w-[782px]">
                <div className="mt-4 font-semibold flex justify-end cursor-pointer text-orange-100">Home</div>
                <div className="mx-[100px] h-[720px] ml-[170px]">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-200 font-semibold text-3xl mt-[30px] pb-[60px]">Sign Up here</h1>
                    <div>
                        <input placeholder="firstname" className="w-[218px] h-[45px] mr-6 mb-5 rounded-lg pl-3 text-black"></input>
                        <input placeholder="lastname" className="w-[218px] h-[45px] mb-5 rounded-lg pl-3 text-black"></input>
                        <input placeholder="email" type="email" className="w-[465px] h-[45px] mb-5 rounded-lg pl-3 text-black"></input>
                        <input type="date" className="w-[218px] h-[45px] mr-6 mb-5 rounded-lg pl-3 text-black"></input>
                        <select className="bg-white text-black w-[218px] h-[45px] mb-5 rounded-lg pl-3">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input placeholder="password" type="password" className="w-[465px] h-[45px] mb-5 rounded-lg pl-3 text-black"></input>
                        <input placeholder="re-enter password" type="password" className="w-[465px] h-[45px] mb-10 rounded-lg pl-3 text-black"></input>
                    </div>
                    <button type="submit" className="w-[465px] h-[45px] bg-teal-200 text-black font-semibold rounded-lg">Sign Up</button>
                    <div className="ml-[220px] mt-6 mb-6">OR</div>
                    <div className="flex">
                        <button className="w-[218px] mr-6 rounded-lg h-[50px] text-sm border border-white hover:bg-orange-200 hover:text-black hover:border-black">Sign Up with Google</button>
                        <button className="w-[218px] rounded-lg h-[50px] text-sm border border-white hover:bg-orange-200 hover:text-black hover:border-black">Sign Up with Facebook</button>
                    </div>
                    <div className="ml-[100px] mt-7">Already have an account? <a className="text-teal-200 cursor-pointer">Login</a></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;