import React, { useState, useCallback } from "react";

// Generates random colours any time it's called
const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

// The type of the props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// A memoized button with a random background colour
const MemoizedButton = React.memo((props: ButtonProps) => (
  <button onClick={props.onClick} style={{ background: randomColour() }} className="p-4 m-4 rounded">
    {props.children}
  </button>
));

export default MemoizedButton;
