import { useState } from "react";

const App = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    const newClick = {
      left: click.left + 1,
      right: click.right,
    };
    setClick(newClick);
  };

  const handleClickRight = () => {
    const newClick = {
      right: click.right + 1,
      left: click.left,
    };
    setClick(newClick);
  };

  return (
    <div>
      {click.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleClickRight}>right</button>
      {click.right}
    </div>
  );
};

export default App;
