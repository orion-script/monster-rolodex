import React from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;

// import { Component } from "react";
// import "./card-list.styles.css";
// import Card from "../card/Card";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
