"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import authentication service
import { register, login } from "../../services/authentication";
import Header from "@/app/components/Home/Header";

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
      <Header />
      <div className="  py-12 px-2 scale-100 overflow-hidden login ">
        <div className=" py-12 px-2 flex flex-col gap-1 ">
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
        </div>
        <div class="shadow-xl rounded-md py-12 relative px-3 ">
          <div class="absolute rounded-lg inset-0 bg-gray-300 opacity-15 filter backdrop-blur-lg"></div>

          {/* ----------------login----------------- */}
          <div
            class={`shadow-md py-12 transition duration-300  ${
              !switcher ? "block" : " hidden translate-x-80"
            }  relative z-10`}
          >
            <p className=" text-3xl font-bold mb-16 mx-4 text-white ">
              Login to your account
            </p>
            <form onSubmit={loginUser} className=" flex flex-col  ">
              {emailError && (
                <p className="text-red-400 text-xs italic">{emailError}</p>
              )}
              <input
                placeholder="Email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className=" text-sm  h-12 mb-6  px-5 border italic outline-none focus-visible:scale-100 rounded-md "
                required
              />
              {passwordError && (
                <p className="text-red-400 text-xs italic">{passwordError}</p>
              )}
              <input
                placeholder="Password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className=" text-sm mb-6 h-12 rounded-md  px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
              {loginError && (
                <p className="text-red-400 text-xs italic">{loginError}</p>
              )}
              <button className=" bg-[#14100c] text-white 11/12 h-12 font-bold tracking- z-[999]">
                Login
              </button>
            </form>
            <p className=" text-sm text-white mx-4 mt-4 mb-2">
              Don't have an account?{" "}
              <span
                className="text-[#97836c] font-bold txet-base mx-3"
                onClick={() => {
                  // after 4 seconds the switcher will be set to true
                  setTimeout(() => {
                    setSwitcher(true);
                  }, 500);
                }}
              >
                Register
              </span>
            </p>
            <p className=" mx-4 mt-4 mb-2">
              <a className="text-[#97836c] font-bold" href="/password-reset">
                Forgot password?
              </a>
            </p>
          </div>

          {/* --------------------register--------- */}
          <div
            class={`shadow-md py-12 ${
              switcher ? "block" : " hidden"
            }  relative z-10`}
          >
            <p className=" text-3xl font-bold mb-16 mx-4 text-white ">
              Create your account
            </p>
            <form
              className=" flex flex-col gap-6 items-center"
              onSubmit={registerUser}
            >
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
              <div className=" w-11/12 flex gap-2">
                <input
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className=" text-sm w-[49%]  h-12  px-5 border italic outline-none focus-visible:scale-100 s  "
                  required
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className=" text-sm w-[49%]  h-12  px-5 border italic outline-none focus-visible:scale-100 s  "
                  required
                />
              </div>

              <input
                placeholder="Phone Number"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
              <button className=" z-[999] bg-[#14100c] text-white w-11/12 h-12 font-bold tracking-wider">
                Register
              </button>
            </form>
            <p className=" text-sm text-white mx-4 mt-4 mb-2">
              Already have an account?
              <span
                className="text-[#97836c] font-bold mx-3 text-base"
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
    </>
  );
};

export default page;
