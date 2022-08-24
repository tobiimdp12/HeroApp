import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ hero }) {
  const navigate = useNavigate();
  return (
    <div className="mb-5 max-w-5 m-10">
      {!hero ? (
        "Loading"
      ) : (
        <div className="h-full rounded overflow-hidden shadow-lg bg-white  animate__animated animate__backInUp">
          <img className="w-full" src={hero.images.lg} alt={hero.name} />
          <div className="px-12 py-4">
            <div className="font-bold text-xl mb-2">
              {hero.biography.fullName || hero.name}
            </div>
          </div>
          <div className="w-full px-6 pt-4 pb-2 text-2xl flex items-start flex-col">
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #publisher:{hero.biography.publisher}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #alignment:{hero.biography.alignment}
            </div>
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #alter Egos: {hero.biography.alterEgos}
            </div>
          </div>
          <div className="flex justify-evenly flex-wrap items-center m-4">
            <Link
              to={`/moredetails/${hero.id}`}
              className="inline-block px-7 py-3 mb-2 bg-violet-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out  text-2xl "
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
             
            >
              More Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
