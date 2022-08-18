import React from "react";
import { useContext } from "react";
import {HeroContext} from "../heroContext/HeroContext";

//hook for heroes
export const useHeroes = () => {
  const {
    state: { data, isLoading },
    actions: {
      getHeroById,
      getHeroByName,
      getHeroesByPublishers,
      getPublishers,
    },
  } = useContext(HeroContext);

  return {
    data,
    isLoading,
    getHeroById,
    getHeroByName,
    getHeroesByPublishers,
    getPublishers,
  };
};
