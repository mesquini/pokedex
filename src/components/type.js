import React from "react";

import grass from "../img/grass.png";
import poison from "../img/poison.png";
import electric from "../img/electric.png";
import bug from "../img/bug.png";
import fire from "../img/fire.png";
import dragon from "../img/dragon.png";
import dark from "../img/dark.png";
import fighting from "../img/fighting.png";
import flying from "../img/flying.png";
import ghost from "../img/ghost.png";
import ground from "../img/ground.png";
import ice from "../img/ice.png";
import normal from "../img/normal.png";
import psychic from "../img/psychic.png";
import rock from "../img/rock.png";
import steel from "../img/steel.png";
import water from "../img/water.png";

import "./type.css";


import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default function LoadType({ type }) {
  function selectType() {
    if (type.length === 2) {
      var t1 = searchType(type[0]);
      var t2 = searchType(type[1]);
      return { t1, t2 };
    } else {
      const t1 = searchType(type[0]);
      return t1;
    }
  }
  function searchType(t) {
    switch (t) {
      case "Grass":
        return grass;
      case "Poison":
        return poison;
      case "Fire":
        return fire;
      case "Flying":
        return flying;
      case "Dark":
        return dark;
      case "Dragon":
        return dragon;
      case "Electric":
        return electric;
      case "Fighting":
        return fighting;
      case "Ghost":
        return ghost;
      case "Ground":
        return ground;
      case "Ice":
        return ice;
      case "Normal":
        return normal;
      case "Psychic":
        return psychic;
      case "Rock":
        return rock;
      case "Steel":
        return steel;
      case "Water":
        return water;
      case "Bug":
        return bug;

      default:
        return "";
    }
  }
  
  return (
    <>
      {type.length > 1 ? (
        <div className="types">
          <OverlayTrigger overlay={<Tooltip> {type[0]}</Tooltip>}>
            <img className="type" src={selectType().t1} alt="type" />
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip> {type[1]}</Tooltip>}>
            <img className="type" src={selectType().t2} alt="type" />
          </OverlayTrigger>
        </div>
      ) : (
        <OverlayTrigger overlay={<Tooltip> {type}</Tooltip>}>
          <img className="type" src={selectType()} alt="type" />
        </OverlayTrigger>
      )}
    </>
  );
}
