import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { startCreatingUserWithEmail } from "../../store/auth/thunks";
import img from "../../Assets/register.png";
import loading from "../../Assets/loading.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formData = {
  email: "",
  password: "",
  displayName: "",
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
  displayName: [
    [(value) => value.length >= 1, "The username is required"],
    [(value) => value.length >= 6, "The name should have 6 or more characters"],
  ],
};

function RegisterForm() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === "checking", [status]);

  const [formSubmited, setformSubmited] = useState(false);
  const [formSended, setformSended] = useState(false);
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmited(true);
    console.log(isFormValid, status, formSubmited);
    if (!isFormValid) {
      setformSended(false);
      return;
    }
    setformSended(true);
    dispatch(startCreatingUserWithEmail(formState));
  };

  if (status === "authenticated") {
    navigate("/", {
      replace: true,
    });
  }
  const errorAlert = () => {
    toast.error(errorMessage, {
      toastId: "error1",
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (status === "not-authenticated") {
    console.log("entre");
    errorAlert();
  }

  return (
    <>
      {status === "checking" && formSended && isFormValid ? (
        <div className=" min-w-screen min-h-screen mx-auto  flex justify-center items-center">
          <img src={loading} alt="loading..." />
        </div>
      ) : (
        <section className="MinHeight bg-orange-400 m-6  animate__animated animate__fadeInBottomLeft">
          <ToastContainer />
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <img src={img} alt="register" />
              </div>
              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <h1 className="text-center font-medium text-5xl m-5">
                  Register
                </h1>
                <form onSubmit={onSubmit}>
                  <div className="mb-6 h-14 relative">
                    <input
                      type="text"
                      //
                      className={` form-control block w-full px-4 py-2  text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                        !!displayNameValid && formSubmited
                          ? "border-red-800"
                          : ""
                      }`}
                      placeholder="Username"
                      name="displayName"
                      value={displayName}
                      onChange={onInputChange}
                    />
                    <p
                      className={`${
                        !!displayNameValid && formSubmited
                          ? "visible text-red-700 "
                          : "invisible "
                      } font-light absolute`}
                    >
                      {displayNameValid}
                    </p>
                  </div>

                  <div className="mb-6  h-14 relative">
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

                  <div className="mb-6 h-14 relative">
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
                    className="inline-block px-7 py-3 mt-12 bg-blue-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-2xl"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    //disabled={isChecking}
                  >
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default RegisterForm;
