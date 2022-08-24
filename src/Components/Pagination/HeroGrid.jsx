import React from "react";
import Card from "../Card/Card";
import { FaAngleDoubleRight,FaAngleDoubleLeft } from "react-icons/fa";

function HeroGrid({ heroes, counter, increment, decrement }) {
  const TOTAL_PER_PAGE = 5;

  let totalPages = Math.ceil(heroes.length / TOTAL_PER_PAGE);
  if (heroes.length === 0) totalPages = 1;

  let currentHeroes = heroes.slice(
    (counter - 1) * TOTAL_PER_PAGE,
    (counter - 1) * TOTAL_PER_PAGE + TOTAL_PER_PAGE
  );

  console.log(currentHeroes);
  return (
    <>
      <h1 className="text-center">
        Pagina {counter} de {totalPages}
      </h1>
      <div className="flex justify-evenly items-center flex-wrap">
        <button
          className="flex-shrink-0 px-3 py-1 bg-red-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out text-3xl"
          onClick={() => {
            decrement(1, 1);
          }}
        >
          <FaAngleDoubleLeft/>
        </button>
        <button
      
      
          className="flex-shrink-0 px-3 py-1 bg-green-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out text-3xl"
          onClick={() => {
            increment(1, totalPages);
          }}
        >
          <FaAngleDoubleRight/>
        </button>
      </div>

      <div className="w-full flex justify-around items-center flex-wrap mt-4 mb-48 ">
        {currentHeroes
          ? currentHeroes.map((hero) => {
              return <Card  key={hero.id} hero={hero} />;
            })
          : "Loading"}
      </div>
    </>
  );
}

export default HeroGrid;
