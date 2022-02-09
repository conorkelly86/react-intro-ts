import React from "react";

import players from "../players.json";

export interface CardProps {
  name: string;
  position: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ name, position, image }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {players.map((player) => (
        <div className="flex justify-center md:w-1/3 sm:1/12 p-5">
          <div className="inline-block text-center">
            <img className="border-4 mx-auto" src={player.image} alt="" />
            <div className=" font-medium text-lg text-gray-900">{player.name}</div>
            <div className=" text-lime-200 mb-3 whitespace-nowrap">{player.position}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
