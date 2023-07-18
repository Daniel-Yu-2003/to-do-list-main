import { useState } from "react";
import Form from "./Form";
import Points from "./Points";

function TodoList() {
  const [points, setPoints] = useState([]);
  const [texts, setTexts] = useState([]);

  const addPoint = (point) => {
    const newPoints = [point, ...points];
    const newTexts = [point.text, ...texts];
    setPoints(newPoints);
    setTexts(newTexts);
    console.log(point);
  };

  const removePoint = (id) => {
    const removePoints = points.filter((point) => point.id != id);
    setPoints(removePoints);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form onSubmit={addPoint} />
      <Points points={points} removePoint={removePoint} />
      {/* {texts} */}
    </div>
  );
}

export default TodoList;
