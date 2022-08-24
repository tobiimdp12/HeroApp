import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function MoreDetailsCard({ hero }) {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  console.log(hero);
  return (
    <div className="w-full flex justify-center items-center ">
      {!hero ? (
        "Loading"
      ) : (
        <div className="max-w-xl  mt-5 mb-28 rounded overflow-hidden shadow-lg bg-white  animate__animated animate__backInUp">
          <img className="w-full" src={hero.images.lg} alt={hero.name} />
          <div className="px-12 py-4">
            <div className="font-bold text-xl mb-2">
              {hero.biography.fullName || hero.name}
            </div>
          </div>
          <div className="w-full px-6 pt-4 pb-2 text-2xl flex items-start flex-col">
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #intelligence:{hero.powerstats.intelligence}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #strength:{hero.powerstats.strength}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #speed:{hero.powerstats.speed}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #durability:{hero.powerstats.durability}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #combat:{hero.powerstats.combat}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #strength:{hero.powerstats.strength}
            </div>
            <hr />
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #weight:{hero.appearance.weight[1]}
            </div>
            <div className="inline-block mt-1 bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #height:{hero.appearance.height[1]}
            </div>
          </div>
          <div className="flex justify-evenly flex-wrap items-center m-4">
            <button
              type="button"
              className="inline-block px-7 py-3 mb-2 bg-red-600 text-white font-medium  leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out  text-2xl "
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={onNavigateBack}
            >
              <FaAngleDoubleLeft />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoreDetailsCard;
