import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Components/Home/Home";
import MoreDetails from "../Components/MoreDetails/MoreDetails";
import SearchByName from "../Components/SearchByName/SearchByName";
import SearchByPublisher from "../Components/SearchByPublisher/SearchByPublisher";
import LoginForm from "../Components/LoginForm/LoginForm";
import NotFound from "../Components/NotFound";
import { PrivateRute } from "./PrivateRute";
import { PublicRoute } from "./PublicRoute";
import { HeroesProvider } from "../heroContext/HeroProvider";

function RouteManager() {
  const location = useLocation();
  return (
    <div>
      <HeroesProvider>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PrivateRute>
                  <SearchByName />
                </PrivateRute>
              }
            ></Route>
            <Route
              path="/moredetails:id"
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
          </Routes>
        </AnimatePresence>
      </HeroesProvider>
    </div>
  );
}

export default RouteManager;
