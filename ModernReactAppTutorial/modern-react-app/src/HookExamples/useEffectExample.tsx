import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    for (var i = 0; i < 100000; i++) {
      console.log(i);
    }
    document.title = `You clicked ${count} times`;
  });

  //without useEffect
  // for (var i = 0; i < 100000; i++) {
  //   console.log(i);
  // }
  // document.title = `You clicked ${count} times`;

  return (
    <div style={{ height: 1000 }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
