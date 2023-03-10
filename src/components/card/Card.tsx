import React from "react";
import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster,
};

function Card({ monster }: CardProps) {
  const { name, email, id } = monster;

  return (
    <div>
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

// import { Component } from "react";

// import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div>
//         <div className="card-container" key={id}>
//           <img
//             alt={`monster ${name}`}
//             src={`https://robohash.org/${id}?set=set2`}
//           />
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;
