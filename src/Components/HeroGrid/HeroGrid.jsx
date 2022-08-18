import React, { useEffect } from "react";
import { useCounter } from "../../Hooks/useCounter";
import Card from "../Card/Card";

function HeroGrid({
  heroes,
  currentPage,
  totalPages,
  NextHandler,
  PrevHandler,
}) {
  const { counter, increment, decrement, reset } = useCounter(1);

  useEffect(() => {}, [heroes]);

  return (
    <>
      <h1>
        Pagina {counter} de {totalPages}
      </h1>
      <div className="flex justify-evenly items-center flex-wrap">
        <button
          className="flex-shrink-0 px-3 py-1 bg-red-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out text-3xl"
          onClick={() => {
            decrement(1, 1);
            PrevHandler();
          }}
        >
          Back
        </button>
        <button
          className="flex-shrink-0 px-3 py-1 bg-green-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out text-3xl"
          onClick={() => {
            increment(1, totalPages);
            NextHandler();
          }}
        >
          Next
        </button>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        {heroes
          ? heroes.map((hero) => {
              return <li key={hero.id}>{hero.id}</li>;
            })
          : "Loading"}
      </div>
    </>
  );
}

export default HeroGrid;
