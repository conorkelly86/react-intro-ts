import React from "react";

import players from "../players.json";

export interface CardProps {
  name: string;
}

export const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <>
      <div className="block text-center text-xl">
        {name}
        <div className="flex flex-wrap justify-center" style={{ width: "890px" }}>
          {players.map((player) => (
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
