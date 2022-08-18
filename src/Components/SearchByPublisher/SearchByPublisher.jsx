import React from "react";
import HeroGrid from "../HeroGrid/HeroGrid";
import AnimatedPage from "../../Helpers/AnimatedPage";
import Pagination from "../Pagination/Pagination";
import { useHeroes } from "../../Hooks/useHeroes";

function SearchByPublisher() {
  const { getPublishers } = useHeroes();

  const publishers = getPublishers();
  return (
    <AnimatedPage>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form className="w-full max-w-sm text-white">
          <select
            id="countries"
            className="max-w-4xl my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue>Choose a publisher</option>
            {publishers.map((publisher) => {
              return <option>{publisher}</option>;
            })}
          </select>
        </form>
        <Pagination />
      </div>
    </AnimatedPage>
  );
}

export default SearchByPublisher;
