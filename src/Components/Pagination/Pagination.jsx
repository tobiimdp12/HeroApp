import React, { useEffect, useState } from "react";
import HeroGrid from "../HeroGrid/HeroGrid";

const ITEM_PER_PAGE = 10;

function Pagination({ data_api }) {
  console.log(data_api);
  const [dataFromApi, setData] = useState([]);
  const [items, setItems] = useState([...data_api].splice(0, ITEM_PER_PAGE)); //cortamos a partir del elemento 10
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
   
    setData(data_api);
  }, [data_api]);

  console.log(data_api);
  let totalPages = Math.ceil(dataFromApi.length / ITEM_PER_PAGE) ;
  console.log(totalPages);


  const NextHandler = () => {
    const totalElementos = dataFromApi.length;

    console.log(totalElementos);
    //increment(1)
    //console.log("counter",counter);
    const nextPage = currentPage + 1;
    //20                  2           10
    const firstIndex = nextPage * ITEM_PER_PAGE;

    if (firstIndex >= totalElementos) return;
    //20               10
    setItems([...dataFromApi].splice(firstIndex, ITEM_PER_PAGE)); //a partir de que elemento tenemos que seguir cortando

    setCurrentPage(nextPage);
  };

  const PrevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 1) return;

    const firstIndex = prevPage * ITEM_PER_PAGE; //a partir de que elemento tenemos que seguir cortando
    setItems([...dataFromApi].splice(firstIndex, ITEM_PER_PAGE));

    setCurrentPage(prevPage);
  };
  return (
    <div>
      <HeroGrid
        heroes={items}
        currentPage={currentPage}
        totalPages={totalPages}
        NextHandler={NextHandler}
        PrevHandler={PrevHandler}
      />
    </div>
  );
}

export default Pagination;
