import { useState } from "react";
import Form from "./Form";
import Points from "./Points";

function TodoList() {
  const [points, setPoints] = useState([]);

  const addPoint = (point) => {
    const newPoints = [point, ...points];
    setPoints(newPoints);
    console.log(point);
  };

  const removePoint = (id) => {
    const removePoints = points.filter((point) => point.id != id);
    setPoints(removePoints);
  };

  const updateList = (edit, point) => {
    const newPoints = points.map((item) =>
      item.id === edit.id ? { id: edit.id, text: point.text } : item
    );
    setPoints(newPoints);
    console.log({ id: edit.id, text: point.text });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form onSubmit={addPoint} placeholder={"Enter a todo"} />
      <Points
        points={points}
        removePoint={removePoint}
        updateList={updateList}
      />
    </div>
  );
}

export default TodoList;
