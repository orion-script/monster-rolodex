import React from "react";
import { Monster } from "../../App";
import "./card-list.styles.css";
import Card from "../card/Card";

type CardListProps = {
  monsters: Monster[];
};

function CardList({ monsters }: CardListProps) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
