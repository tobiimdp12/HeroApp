import React from "react";
import { Route, Routes } from "react-router-dom";
import MoreDetails from "../Components/MoreDetails/MoreDetails";
import SearchByName from "../Components/SearchByName/SearchByName";
import SearchByPublisher from "../Components/SearchByPublisher/SearchByPublisher";
import LoginForm from "../Components/LoginForm/LoginForm";
import NotFound from "../Components/NotFound";
import { PrivateRute } from "./PrivateRute";
import { PublicRoute } from "./PublicRoute";
import { HeroesProvider } from "../heroContext/HeroProvider";
import RegisterForm from "../Components/RegisterForm/RegisterForm";

function RouteManager() {
  return (
    <div>
      <HeroesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRute>
                <SearchByName />
              </PrivateRute>
            }
          ></Route>
          <Route
            path="/moredetails/:heroId"
            element={
              <PrivateRute>
                <MoreDetails />
              </PrivateRute>
            }
          ></Route>

          <Route
            path="/publisher"
            element={
              <PrivateRute>
                <SearchByPublisher />
              </PrivateRute>
            }
          ></Route>

          <Route
            path="*"
            element={
              <PrivateRute>
                <NotFound />
              </PrivateRute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          ></Route>
        </Routes>
      </HeroesProvider>
    </div>
  );
}

export default RouteManager;
