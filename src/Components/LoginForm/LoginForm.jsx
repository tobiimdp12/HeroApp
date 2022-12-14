import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "../../Hooks/useForm";
import image from "../../Assets/reading.png";
import loading from "../../Assets/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [
    [(value) => value.includes("@"), "email should  have a @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "invalid email",
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      "the password should  have 6 or more characters",
    ],
  ],
};

function LoginForm() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { status, uid } = useSelector((state) => state.auth);

  const [formSubmited, setformSubmited] = useState(false);

  const [formSended, setformSended] = useState(false);

  const {
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmited(true);

    if (!isFormValid) {
      setformSended(false);
      return;
    }
    setformSended(true);
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");

    dispatch(startGoogleSignIn());
  };

  //const { login } = useContext(AuthContext);
  if (status === "authenticated") {
    navigate("/", {
      replace: true,
    });
  }

  return (
    <>
      {status === "checking" && formSended && isFormValid ? (
        <div className=" min-w-screen min-h-screen mx-auto  flex justify-center items-center">
          <img src={loading} alt="loading..." />
        </div>
      ) : (
        <section className="h-50 bg-orange-400 m-6 s MinHeight animate__animated animate__fadeInBottomLeft">
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <img src={image} className="w-full" alt="Phone image" />
              </div>
              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <h1 className="text-center font-medium text-5xl m-5">Login</h1>
                <form onSubmit={onSubmit}>
                  <div className="mb-6 h-12 relative">
                    <input
                      type="text"
                      //
                      className={` form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                        !!emailValid && formSubmited ? "border-red-800" : ""
                      }`}
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={onInputChange}
                    />
                    <p
                      className={`${
                        !!emailValid && formSubmited
                          ? "visible text-red-700"
                          : "invisible"
                      } font-light absolute`}
                    >
                      {emailValid}
                    </p>
                  </div>

                  <div className="mb-6 h-12 relative">
                    <input
                      type="password"
                      className={` form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                        !!passwordValid && formSubmited ? "border-red-800" : ""
                      }`}
                      placeholder="password"
                      name="password"
                      value={password}
                      onChange={onInputChange}
                    />
                    <p
                      className={`${
                        !!passwordValid && formSubmited
                          ? "visible text-red-700"
                          : "invisible"
                      } font-light absolute`}
                    >
                      {passwordValid}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-block px-7 py-3 mt-3 bg-blue-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-2xl"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    //disabled={isChecking}
                  >
                    Sign in
                  </button>

                  <button
                    type="submit"
                    className="flex justify-center items-center px-7 py-3 mt-3  bg-violet-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out w-full text-2xl"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    //disabled={isChecking}
                    onClick={onGoogleSignIn}
                  >
                    Sign in With <FcGoogle className="ml-3" />
                  </button>
                </form>
                <NavLink
                  to="/register"
                  className="text-center inline-block px-7 py-3 mt-3 bg-green-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full text-2xl"
                >
                  Create Account
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default LoginForm;
