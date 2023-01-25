import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(23);

  const handleClick = (param) => () => {
    setValue(param);
  };
  return (
    <div>
      {value}
      <button onClick={handleClick(0)}>makeZero</button>
      <button onClick={handleClick(3)}>makeThree</button>
      <button onClick={handleClick(5)}>makeFive</button>
      <button onClick={handleClick(23)}>make23</button>
    </div>
  );
};

export default App;
