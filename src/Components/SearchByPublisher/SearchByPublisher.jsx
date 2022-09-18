import React, { useState } from "react";
import HeroGrid from "../Pagination/HeroGrid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useHeroes } from "../../Hooks/useHeroes";
import { useCounter } from "../../Hooks/useCounter";
import { useSelector } from "react-redux";

function SearchByPublisher() {
  const { getPublishers } = useHeroes();
  const publishers = getPublishers();
  const { counter, increment, decrement, reset } = useCounter(1);
  const [heroes, setHeroes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("publisher" || "");
  const navigate = useNavigate();
  const { displayName } = useSelector((state) => state.auth);
  const { getHeroesByPublishers } = useHeroes();

  const handleChange = (e) => {
    reset();

    setSearchParams(e.target.value);
    navigate(`?publisher=${e.target.value}`);
    setHeroes(getHeroesByPublishers(e.target.value));
  };
  return (
    <>
      <div className=" rounded overflow-hidden my-10 mx-auto animate__animated animate__bounceInDown">
        <h1 className="text-center text-5xl">
          Welcome {displayName}
        </h1>

        <form className="w-full flex items-center  justify-center text-white">
          <select
            id="countries"
            className="max-w-4xl my-3 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          >
            <option defaultValue>Choose a publisher</option>
            {publishers
              ? publishers.map((publisher) => {
                  return <option value={publisher}>{publisher}</option>;
                })
              : ""}
          </select>
        </form>

        <HeroGrid
          heroes={heroes}
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </>
  );
}

export default SearchByPublisher;
