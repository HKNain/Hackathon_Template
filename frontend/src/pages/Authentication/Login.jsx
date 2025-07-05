<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail, isStrongPassword } from "../../utils/validation";
import { login } from "../../services/api";
import img1 from "../../public/login_img.jpg";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [valid, setValid] = useState({});
  const [touched, setTouched] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setError("");

    let fieldIsValid = true;
    if (name === "email") fieldIsValid = isEmail(value);
    else if (name === "password") fieldIsValid = isStrongPassword(value);

    setValid((prev) => ({ ...prev, [name]: fieldIsValid }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await login(form);
      localStorage.setItem("authToken", data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-stone-900 to-black text-white fixed inset-0 w-screen h-screen flex flex-wrap">
        <div className="w-[750px] h-[760px] text-white mt-4 mb-10 ml-[10px]">
          <div className="font-semibold w-[125px] h-[30px] text-white cursor-pointer text-orange-100 rounded pl-3">
            Home
          </div>
          <div className="ml-[80px]">
            <h1 className="font-bold text-5xl mt-[60px] ml-[110px] text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-200">
              Welcome back!
            </h1>
            <div className="w-[480px] flex justify-center mt-10 ml-[63px]">
              <p className="text-center">
                Simply your workflow and boost your productivity with{" "}
                <span className="font-semibold text-orange-200">
                  Finfluencer's App
                </span>
              </p>
            </div>
          </div>

          {error && (
            <div className="fixed inset-0 ml-2 z-50">
              <div className="bg-red-100 border-l-4 border-red-500 shadow-lg p-6 rounded h-[180px] mt-2 w-[20%] max-w-md">
                <div className="text-red-600 font-semibold text-lg mb-2">
                  Error
                </div>
                <p className="text-gray-800">{error}</p>
                <div className="flex justify-end">
                  <button
                    className="mt-4 px-2 py-1 bg-red-300 hover:bg-red-400 hover:text-white text-red-700 rounded"
                    onClick={() => setError("")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center mb-2">
            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-[400px] h-[50px] bg-gray-100 mt-8 px-3 py-2 border rounded-3xl text-black border-black ${
                  touched.email && !valid.email
                    ? "border-red-500 bg-red-100 text-black"
                    : "border-gray-300"
                }`}
                placeholder="Email"
              />
              {touched.email && !valid.email && (
                <p className="text-red-500 text-sm mt-1">
                  &nbsp;&nbsp;&nbsp;Enter a valid email.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                className={`bg-gray-100 mt-2 mb-1 w-[400px] h-[50px] rounded-3xl pl-5 text-black border border-black ${
                  touched.password && !valid.password
                    ? "border-red-500 bg-red-100"
                    : "border-gray-300"
                }`}
              />
              {touched.password && !valid.password && (
                <p className="text-red-500 text-sm mt-1 mb-1">
                  &nbsp;&nbsp;&nbsp;Must be 8+ characters ( letter, number, and symbol )
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <a className="font-semibold text-sm ml-[270px] cursor-pointer hover:text-orange-100 text-gray-300">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center">
            <button
              // disabled={!valid.email || !valid.password}
              type="button"
              onClick={handleSubmit}
              className="bg-teal-200 mt-10 mb-10 mx-24 w-[400px] h-[45px] rounded-3xl text-black font-semibold  disabled:opacity-50"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-500 w-[150px] h-[2px] mt-3"></div>
            <span className="text-sm font-semibold mx-4">
              or continue with?
            </span>
            <div className="bg-gray-500 w-[150px] h-[2px] mt-3"></div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-orange-100 w-12 h-12 rounded-3xl text-black text-2xl font-bold hover:bg-orange-300">
              G
            </button>
            <button className="bg-orange-100 w-12 h-12 ml-7 rounded-3xl text-black text-2xl font-bold hover:bg-orange-300">
              F
            </button>
            <button className="bg-orange-100 w-12 h-12 ml-7 rounded-3xl text-black text-2xl font-bold hover:bg-orange-300">
              I
            </button>
          </div>
          <div className="font-semibold text-sm mt-10 flex justify-center">
            Not a member?&nbsp;{" "}
            <a
              className="text-teal-200 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Register now
            </a>
          </div>
        </div>
        <div className="w-[635px] h-full mt-8">
          <div className="flex">
            <img src={img1} alt="image" className="h-[760px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e5e6787 (Login and SignUp)
