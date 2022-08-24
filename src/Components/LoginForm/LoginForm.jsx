import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { useForm } from "../../Hooks/useForm";
import image from "../../Assets/reading.png";
function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { formState, onInputChange } = useForm({
    username: "",
  });

  const { username } = formState;

  const onLogin = () => {
    if (username === "") return;
    login(username);


    navigate("/", {
      replace: true,
    });
  };
  return (
    <>
      <section className="h-50 bg-orange-400 m-6 s MinHeight animate__animated animate__fadeInBottomLeft">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={image} className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <h1 className="text-center font-medium text-5xl m-5">Login</h1>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-2xl"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={onLogin}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
