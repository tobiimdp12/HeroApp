import React from "react";
import { useSelector } from "react-redux";
import AnimatedPage from "../../Helpers/AnimatedPage";

function Home() {



  return (
    <AnimatedPage>
      <h1 className="text-center text-3xl my-6">My Team</h1>
      <h2 className="text-center text-6xl my-3">Hello {displayName} </h2>
      /**grafico */ /**mostrar team */
      <h2 className="text-center text-5xl my-3">
        You dont have any hero in your team
      </h2>
    </AnimatedPage>
  );
}

export default Home;
