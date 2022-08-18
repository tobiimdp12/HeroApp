import React, { useContext, useEffect, useState } from "react";
import HeroGrid from "../HeroGrid/HeroGrid";
import AnimatedPage from "../../Helpers/AnimatedPage";
import { useForm } from "../../Hooks/useForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { useHeroes } from "../../Hooks/useHeroes";

function SearchByName() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("heroname" || "");
  const { formState, onInputChange } = useForm({
    heroname: searchTerm || "",
  });

  const { getHeroByName } = useHeroes();

  const { heroname } = formState;

  let heroes;
  heroes = getHeroByName(heroname);

  useEffect(() => {

  }, [searchTerm])
  
  console.log(heroes);
  const onSubmitHandle = (event) => {
    event.preventDefault();
    if (heroname.trim().length <= 1) return;
    console.log(heroname);

    navigate(`?heroname=${heroname}`);

    console.log(heroname);
  };
  return (
    <AnimatedPage>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form className="w-full max-w-sm text-white" onSubmit={onSubmitHandle}>
          <div className="flex items-center border-b-2 border-white-500 py-2 ">
            <input
              className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search A Hero :)"
              name="heroname"
              value={heroname}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="flex-shrink-0 px-6 py-2.5 bg-orange-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out text-3xl"
            >
              Search
            </button>
          </div>
        </form>
        {heroes ? <Pagination data_api={heroes} /> : ""}
      </div>
    </AnimatedPage>
  );
}

export default SearchByName;
