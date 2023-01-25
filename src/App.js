import { useState } from "react";
const Stasistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {"good: "}
            {good}
          </td>
        </tr>
        <tr>
          <td>
            {"neutral: "}
            {neutral}
          </td>
        </tr>
        <tr>
          <td>
            {"bad: "}
            {bad}
          </td>
        </tr>
        <tr>
          <td>
            {"all: "}
            {all}
          </td>
        </tr>
        <tr>
          <td>
            {"avarage: "}
            {average}
          </td>
        </tr>
        <tr>
          <td>
            {"positive: "}
            {positive}
            {"%"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = () => {
    setGood(good + 1);
  };
  const handleClick1 = () => {
    setNeutral(neutral + 1);
  };
  const handleClick2 = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good - bad) / 2;
  const positive = (good / all) * 100;
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleClick}>good</button>
      <button onClick={handleClick1}>neutral</button>
      <button onClick={handleClick2}>bad</button>
      <h2>stasistics</h2>
      <Stasistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
