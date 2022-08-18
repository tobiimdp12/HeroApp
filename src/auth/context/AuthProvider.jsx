import React, { useReducer } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
  user: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);
  const { data, isLoading } = useFetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  const login = (username = "") => {
    const user = {
      id: "ABC123",
      username: username,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: types.login,
      payload: user,
    });
  };

  const logout = () => {
    dispatch({ type: types.logout });

    localStorage.removeItem("user");
  };

  const getHeroes = () => {
    return data;
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout,getHeroes}}>
      {children}
    </AuthContext.Provider>
  );
};
