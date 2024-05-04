"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import authentication service
import { register, login } from "../../services/authentication";

const page = () => {
  const [switcher, setSwitcher] = useState(false);
  // register values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // login values
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // email error
  const [emailError, setEmailError] = useState("");
  // password error
  const [passwordError, setPasswordError] = useState("");
  // login error
  const [loginError, setLoginError] = useState("");

  // arrenge the data to be sent to the server
  const data = {
    user_name: username,
    user_email: email,
    user_first_name: firstName,
    user_last_name: lastName,
    user_phone_number: phoneNumber,
    user_password: password,
    user_rate: 5,
    active_user_status: 1,
  };

  // register function
  const registerUser = async (e) => {
    e.preventDefault();
    let valid = true;
    try {
      if (!data.user_email) {
        setEmailError("Please enter your email address first");
        valid = false;
      } else if (!data.user_email.includes("@")) {
        setEmailError("Invalid email format");
      } else {
        const regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(data.user_email)) {
          setEmailError("Invalid email format");
          valid = false;
        } else {
          setEmailError("");
        }
      }
      // Password has to be at least 6 characters long
      if (!data.user_password || data.user_password.length < 6) {
        setPasswordError("Password must be at least 6 characters long");
        valid = false;
      } else {
        setPasswordError("");
      }

      // if the form is not valid, return
      if (!valid) {
        return;
      }

      const response = await register(data);

      if (response.status === "true") {
        console.log("User registered successfully");

        // clear the form
        setUsername("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setPassword("");
        // switch to the login form
        setSwitcher(false);
      } else {
        setEmailError(response.message);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // arrenge login data to be sent to the server
  const loginData = {
    user_email: loginEmail,
    user_password: loginPassword,
  };
  // login function
  const loginUser = async (e) => {
    e.preventDefault();
    // clear the errors
    setEmailError("");
    setPasswordError("");
    setLoginError("");
    try {
      const response = await login(loginData);

      if (response.status === "true") {
        console.log(response);
        // set the user data to the local storage
        localStorage.setItem("user", JSON.stringify(response.token));

        // decode the token to get the user data
        const user = JSON.parse(atob(response.token.split(".")[1]));
        console.log(user);
        // clear the form
        setLoginEmail("");
        setLoginPassword("");

        if (user.user_role !== 3) {
          // redirect to home page
          window.location.href = "/";
        } else {
          // redirect to admin page
          window.location.href = "/pages/admin/admin-dashboard";
        }
      } else {
        if (response.code === "INVALID_EMAIL") {
          setEmailError(response.error);
        } else if (response.code === "INCORRECT_PASSWORD") {
          setPasswordError(response.message);
        } else {
          setLoginError(response.message);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className=" relative bg-slate-200   scale-100 overflow-hidden  ">
        {/* <div className=" py-12 px-2 flex flex-col gap-1 ">
          <div className=" flex gap-2 ">
            <FaStar className=" text-[#91765a] " />
            <FaStar className=" text-[#91765a] " />
            <FaStar className=" text-[#91765a] " />
            <FaStar className=" text-[#91765a] " />
            <FaStar className=" text-[#91765a] " />
          </div>
          <p className=" text-white text-3xl font-bold  pt-3 ">
            We Are Best Barbers & Hair{" "}
          </p>
          <p className=" text-white text-3xl font-bold  ">
            Cutting Salon at ATL.
          </p>
          <div className=" my-4 flex  text-white">
            <img className=" h-16 font-bold" src="/assets/icons/razor.png" />
            <div className="flex flex-col mx-4">
              <p className=" font-bold  text-[#91765a]">APPOINTMENT</p>
              <p className=" text-2xl font-bold">855 555 5555</p>
            </div>
          </div>
        </div> */}
        <div class=" shadow-xl rounded-md py-12 px-3 ">
          {/* <div class="absolute rounded-lg inset-0 bg-[#141a29] opacity-85 filter backdrop-blur-lg"></div> */}

          {/* ----------------login----------------- */}
          <div
            class={` relative shadow-md md:w-10/12 transition duration-300  z-10  bg-white rounded-2xl  m-auto my- rounded-ss-3xl  `}
          >
            {/* ------the  bottom image ----- */}
            <div class="absolute  rounded-lg inset-0 z-10 opacity-85 filter backdrop-blur-lg">
              <img
                className=" absolute bottom-3 right-3 h-28"
                src="/assets/icons/mobile-password-forgot.png"
              />
            </div>

            {/* -----------------login form----------------- */}
            <div className=" relative z-20 rounded-3xl mt-24 md:mt-auto  flex flex-col md:flex-row justify-center  gap-2">
              {/* --side div---- */}
              <div className={` relative flex md:h-auto gap-8 transition duration-[1500ms]  justify-center items-center m-3 rounded-lg -z-20     md:w-1/2 h-44 
            ${switcher ? " md:translate-x-full" : "block"}
              `}>
                <div className=" absolute inset-0 bg-gray-900 opacity-25 rounded-2xl -z-30"></div>

                <div className="absolute md:top-20 w-full flex  justify-center ">
                  <div className=" relative p-5 md:p-8 rounded-lg ">
                    <div className=" absolute inset-0 -z-10 bg-slate-50 rounded-lg rotate-12 opacity-90"></div>
                    <img
                      className=" z-[999]   w-28"
                      src="/assets/icons/barber-shop.png"
                    />
                  </div>
                  <div className=" absolute md:-top-16 md:left-[120px] -top-2 left-4 inline-block h-16 w-16 rounded-full bg-yellow-300"></div>
                  <div className=" absolute md:-bottom-3 md:right-[170px] bottom-0 right-5  inline-block md:h-9 md:w-9 h-10 w-10 rounded-full bg-blue-500  "></div>
                  <div className="  absolute -z-20  md:left-[350px] left-72  inline-block h-5 w-5 rounded-full bg-yellow-300"></div>
                  <div className="  absolute -z-20 md:-top-3 -top-1  md:left-[380px] left-80 inline-block h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <div className=" hidden  z-30 mt-44 md:flex gap-3  flex-col  justify-center items-center   ">
                  <p className=" font-bold  tracking-wider text-lg ">
                    Be Verified
                  </p>
                  <p className=" text-sm  tracking-wider font-medium">
                    We apprciate your time and effort to verify your account.
                  </p>
                </div>
              </div>
              {/* -----form----- */}
              <div className={` m-4 md:mt-4 flex transition duration-[1500ms] -z-50 flex-col justify-start align-top  md:w-1/2 pb-16 ${switcher ? " md:-translate-x-full" : "block"} `}>
                <p className=" text-2xl font-bold text-gray-700 mb-3 mt-8 ">
                  Hello, Again
                </p>
                <p className=" text-gray-700 text-sm font-medium mb-12">
                  We are happy to see you again. Please login to your account.
                </p>
                {/* form login */}
                <div className={` transition duration-1000
                ${switcher ? "hidden" : "block"}
                `}>
                  <form onSubmit={loginUser} className=" flex flex-col gap-0 mx-3 ">
                    {emailError && (
                      <p className="text-red-400 text-xs italic">
                        {emailError}
                      </p>
                    )}
                    <input
                      placeholder="Email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className=" text-sm  h-12 mb-4  px-5 border italic outline-none focus-visible:scale-100 rounded-md "
                      required
                    />
                    {passwordError && (
                      <p className="text-red-400 text-xs italic">
                        {passwordError}
                      </p>
                    )}
                    <input
                      placeholder="Password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className=" text-sm h-12 rounded-md  px-5 border italic outline-none focus-visible:scale-100 s  "
                      required
                    />
                    <div className="flex gap-3 text-xs items-center justify-between  ">
                      <div>
                        <input
                          className=" text-black  h-3 w-3 mr-2"
                          type="checkbox"
                          placeholder="remember me"
                        />
                        <label className=" text-black text-sm">
                          Remember me
                        </label>
                      </div>
                      <p className=" mx-4 mt-4 mb-2">
                        <a
                          className="text-[#97836c] font-bold"
                          href="/password-reset"
                        >
                          Forgot password?
                        </a>
                      </p>
                    </div>

                    {loginError && (
                      <p className="text-red-400 text-xs italic">
                        {loginError}
                      </p>
                    )}
                    <button className=" rounded-lg mt-4 bg-[#14100c] text-white 11/12 h-12 font-bold tracking- z-[999]">
                      Login
                    </button>
                  </form>
                  <p className=" text-sm text-black  mt-8 mb-2">
                    Don't have an account?{" "}
                    <span
                      className="text-[#97836c] font-bold txet-base mx-3 cursor-pointer"
                      onClick={() => {
                        setTimeout(() => {
                          setSwitcher(true);
                        }, 500);
                      }}
                    >
                      Create Your Account
                    </span>
                  </p>
                </div>
                {/* register form */}
                <div className={`  duration-1000 transition-opacity
                ${switcher ? "block" : " hidden "}
                `}>
                  <form
                    className=" flex flex-col justify-center mx-3 gap-2 -mt-7 "
                    onSubmit={registerUser}
                  >
                    {emailError && (
                      <p className="text-red-400 text-xs italic">
                        {emailError}
                      </p>
                    )}
                    <input
                      placeholder="Username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className=" text-sm  h-10 rounded-lg w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                      required
                    />
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" text-sm  h-10 rounded-lg w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                      required
                    />
                    <div className=" w-11/12 flex gap-2">
                      <input
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className=" text-sm w-[49%]  h-10 rounded-s-lg  px-5 border italic outline-none focus-visible:scale-100 s  "
                        required
                      />
                      <input
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className=" text-sm w-[49%]  h-10 rounded-e-lg  px-5 border italic outline-none focus-visible:scale-100 s  "
                        required
                      />
                    </div>

                    <input
                      placeholder="Phone Number"
                      type="number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className=" text-sm  h-10 rounded-lg w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                      required
                    />
                    <input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className=" text-sm  h-10 rounded-lg w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                      required
                    />
                    <button className=" z-[999] bg-[#14100c] rounded-lg text-white w-11/12 h-12 font-bold tracking-wider">
                      Register
                    </button>
                  </form>
                  <p className=" text-sm  mx-4 mt-4 mb-2">
                    Already have an account?
                    <span
                      className="text-[#97836c] font-bold mx-3 text-base cursor-pointer"
                      onClick={() => {
                        setTimeout(() => {
                          setSwitcher(false);
                        }, 500);
                      }}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
