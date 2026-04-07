import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
  console.log(players);
  return (
    <div>
    <div className="grid grid-cols-3 gap-5">
      {players.map((player) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={player.playerImg} alt="###" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaUser />
                {player.playerName}
              </h2>
              <div className="flex justify-between ">
                <div className="flex gap-2 ">
                  <FaFlag />
                  <p>{player.playerCountry}</p>
                </div>
                <button className="btn">{player.playerType}</button>
              </div>
              <div className="divider"></div>

              <h2 className="font-bold">Rating({player.rating})</h2>
              <div className="flex justify-between">
                <p className="font-bold">{player.batingStyle}</p>
                <p>{player.bowlingStyle}</p>
              </div>

              <div className="card-actions justify-end">
                <p className="font-bold">Price:${player.price}</p>
                <button className="btn">Choose Player</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default AvailablePlayers;
