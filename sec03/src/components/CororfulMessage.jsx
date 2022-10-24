import React from "react";

export const CororfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //プロパティと値が同じであれば省略可能
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

