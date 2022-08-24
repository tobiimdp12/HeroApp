import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHeroes } from "../../Hooks/useHeroes";
import MoreDetailsCard from "../MoreDetailsCard/MoreDetailsCard";

function MoreDetails() {
  const { heroId } = useParams();
  const { isLoading, getHeroById } = useHeroes();
  const hero = getHeroById(parseInt(heroId));

  console.log(heroId);
  return (
    <>
      <h1 className="text-center text-6xl">More Details</h1>

      {!isLoading && <MoreDetailsCard hero={hero} />}
    </>
  );
}

export default MoreDetails;
