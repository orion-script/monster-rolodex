import React from "react";
import "./search-box.styles.css";

function SearchBox({ className, placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;

// import { Component } from "react";
// import "./search-box.styles.css";

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

// export default SearchBox;
