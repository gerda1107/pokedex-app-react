import * as React from "react";

const FavoriteIcon = ({ fill }) => {
  return (
    <svg
      width="45px"
      viewBox="0 0 300 275"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="star"
    >
      <polygon
        fill={fill}
        stroke="#fcbf49"
        strokeWidth="20"
        points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
      />
    </svg>
  );
};

export default FavoriteIcon;
