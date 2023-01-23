import Context from "./components/Context";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course.name} />
      <div style={{ display: "flex" }}>
        <Context part={course.parts[0].name} />{" "}
        <Total exercise={course.parts[0].exercises} />
      </div>
      <div style={{ display: "flex" }}>
        <Context part={course.parts[1].name} />{" "}
        <Total exercise={course.parts[1].exercises} />
      </div>
      <div style={{ display: "flex" }}>
        <Context part={course.parts[2].name} />{" "}
        <Total exercise={course.parts[2].exercises} />
      </div>
      <p>
        {"exercises total number is: "}{" "}
        {course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises}
      </p>
    </div>
  );
};

export default App;
