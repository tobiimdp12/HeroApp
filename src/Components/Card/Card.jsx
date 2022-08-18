import React from "react";

function Card() {
  return (
    <div className="mb-5">
      <div className="rounded overflow-hidden shadow-lg bg-white  animate__animated animate__rollIn">
        <img
          className="w-full"
          src="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Mountain</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
        <div className="flex justify-evenly flex-wrap items-center m-4">
          <button
            type="button"
            className="inline-block px-7 py-3 mb-2 bg-green-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out  text-2xl"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Add Team
          </button>
          <button
            type="button"
            className="inline-block px-7 py-3 mb-2 bg-violet-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out  text-2xl"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
