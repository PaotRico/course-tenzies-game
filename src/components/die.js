import React from "react";

export default function die(prop) {
  const classNames = ["die", prop.held ? "held" : ""].join(" ");
  return (
    <div className={classNames} onClick={prop.holdDice}>
      {prop.value}
    </div>
  );
}
