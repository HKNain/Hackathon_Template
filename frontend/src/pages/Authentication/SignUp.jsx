<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  isEmail,
  isStrongPassword,
  isRequired,
  passwordsMatch,
  isValidName,
} from "../../utils/validation";
import { signup } from "../../services/api";
import image from "../../public/signup_img.jpg";

export default function SignUp() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState({});
  const [valid, setValid] = useState({});
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
    else if (name === "confirmPassword")
      fieldIsValid = passwordsMatch(form.password, value);
    else if (["gender", "dob"].includes(name)) fieldIsValid = isRequired(value);
    else if (name === "firstname" || name === "lastname")
      fieldIsValid = isValidName(value) && isRequired(value);

    setValid((prev) => ({ ...prev, [name]: fieldIsValid }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      const { data } = await signup({
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("authToken", data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-black to-stone-900 text-white fixed inset-0 w-screen h-screen flex flex-wrap">
      <div className="w-[600px] h-[720px] mt-8 mb-10 ml-10">
        <div className="w-[600px] h-[760px]">
          <img
            src={image}
            alt="signup illustration"
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>

      <div className="h-full w-[782px]">
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

        <div className="mt-4 font-semibold flex justify-end cursor-pointer text-orange-100">
          Home
        </div>

        <div className="mx-[100px] h-[720px] ml-[170px]">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-200 font-semibold text-3xl mt-[30px] pb-[60px]">
            Sign Up here
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <input
                  name="firstname"
                  type="text"
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="First name"
                  className={`w-[218px] h-[45px] mr-6 border rounded-lg pl-3 text-black ${
                    touched.firstname && !valid.firstname
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  }`}
                />
                {touched.firstname && !valid.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                    Valid First name is required.
                  </p>
                )}
              </div>

              <div>
                <input
                  name="lastname"
                  type="text"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Last name"
                  className={`w-[218px] h-[45px] border rounded-lg pl-3 text-black ${
                    touched.lastname && !valid.lastname
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  }`}
                />
                {touched.lastname && !valid.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                    Valid Last name is required.
                  </p>
                )}
              </div>
            </div>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              className={`w-[465px] h-[45px] mt-5 border rounded-lg pl-3 text-black ${
                touched.email && !valid.email
                  ? "border-red-500 bg-red-100"
                  : "border-gray-300"
              }`}
            />
            {touched.email && !valid.email && (
              <p className="text-red-500 text-sm mt-1">
                Enter a valid email address.
              </p>
            )}

            <div className="flex">
              <div>
                <input
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  onBlur={(e) =>
                    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
                  }
                  className={`w-[218px] h-[45px] mr-6 mt-5 border rounded-lg pl-3 text-black ${
                    touched.dob && !valid.dob
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  }`}
                />
                {touched.dob && !valid.dob && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select your date of birth.
                  </p>
                )}
              </div>

              <div>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className={`bg-white text-black w-[218px] h-[45px] mt-5 border rounded-lg pl-3 ${
                    touched.gender && !valid.gender
                      ? "border-red-500 bg-red-100"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {touched.gender && !valid.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select your gender.
                  </p>
                )}
              </div>
            </div>

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="password"
              className={`w-[465px] h-[45px] mt-5 border rounded-lg pl-3 text-black ${
                touched.password && !valid.password
                  ? "border-red-500 bg-red-100"
                  : "border-gray-300"
              }`}
            />
            {touched.password && !valid.password && (
              <p className="text-red-500 text-sm mt-1">
                Must be 8+ characters with a letter, number, and symbol.
              </p>
            )}

            <input
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="re-enter password"
              className={`w-[465px] h-[45px] mt-5 border rounded-lg pl-3 text-black ${
                touched.confirmPassword && !valid.confirmPassword
                  ? "border-red-500 bg-red-100"
                  : "border-gray-300"
              }`}
            />
            {touched.confirmPassword && !valid.confirmPassword && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}

            <button
              type="submit"
              disabled={!Object.values(valid).every(Boolean)}
              className="w-[465px] h-[45px] bg-teal-200 mt-8 text-black font-semibold rounded-lg disabled:opacity-50"
            >
              Sign Up
            </button>
          </form>

          <div className="ml-[220px] mt-6 mb-6">OR</div>
          <div className="flex">
            <button className="w-[218px] mr-6 rounded-lg h-[50px] text-sm border border-white hover:bg-orange-200 hover:text-black hover:border-black">
              Sign Up with Google
            </button>
            <button className="w-[218px] rounded-lg h-[50px] text-sm border border-white hover:bg-orange-200 hover:text-black hover:border-black">
              Sign Up with Facebook
            </button>
          </div>

          <div className="ml-[100px] mt-7">
            Already have an account?{" "}
            <a
              className="text-teal-200 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e5e6787 (Login and SignUp)
