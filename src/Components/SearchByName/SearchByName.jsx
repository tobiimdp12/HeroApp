import React, { useState } from "react";
import HeroGrid from "../Pagination/HeroGrid";
import { useForm } from "../../Hooks/useForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useHeroes } from "../../Hooks/useHeroes";
import { useCounter } from "../../Hooks/useCounter";
import { FaSearchengin } from "react-icons/fa";
import { useSelector } from "react-redux";

function SearchByName() {
  const navigate = useNavigate();
  const [heroes, setheroes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("heroname" || "");
  const { formState, onInputChange } = useForm({
    heroname: searchTerm || "",
  });
  const { counter, increment, decrement, reset } = useCounter(1);

  const { getHeroByName } = useHeroes();

  const { displayName } = useSelector((state) => state.auth);


  const { heroname } = formState;

  const onSubmitHandle = (event) => {
    event.preventDefault();
    if (heroname.trim().length <= 0) return;
    console.log(heroname);

    navigate(`?heroname=${heroname}`);
    setheroes(getHeroByName(heroname));
    reset();
    console.log(heroname);
  };

  
  console.log(heroes);
  return (
    <>
      <div className="rounded overflow-hidden my-10 mx-auto  animate__animated animate__bounceInLeft">
        <h1 className="text-center text-5xl">Welcome {displayName}</h1>
        <form
          className="w-full flex items-center  justify-center text-white"
          onSubmit={onSubmitHandle}
        >
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
              <FaSearchengin />
            </button>
          </div>
        </form>
        {heroes ? (
          <HeroGrid
            heroes={heroes}
            counter={counter}
            increment={increment}
            decrement={decrement}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SearchByName;
