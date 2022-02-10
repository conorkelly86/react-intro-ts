import React, { useState } from "react";

import players from "../players.json";

export interface CardProps {
  name: string;
  position: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({}) => {
  const [order, setOrder] = useState(players);

  const sortByAge = () => {
    const sorted = [...order].sort((a, b) => {
      return a.number - b.number;
    });
    setOrder(sorted);
  };

  return (
    <>
      <div className="block">
        <div className="inline-flex mt-10">
          <button
            onClick={sortByAge}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto justify-center w-100"
          >
            Sort squad by shirt number!
          </button>
        </div>
        <div className="flex flex-wrap justify-center" style={{ width: "890px" }}>
          {order.map((player) => (
            <div className="flex justify-center md:w-1/3 sm:1/12 p-5">
              <div className="inline-block text-center">
                {player.image ? (
                  <img className="mx-auto hover:animate-pulse" src={player.image} alt="" />
                ) : (
                  <img className="mx-auto hover:animate-pulse" src="./images/blank.png" alt="" />
                )}
                <div className=" font-medium text-lg text-gray-900">{player.name}</div>
                <div className=" text-emerald-900  mb-3 whitespace-nowrap">{player.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
