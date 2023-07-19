import { useState } from "react";
import Form from "./Form";

function Points({ points, removePoint, updateList }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateList(edit, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id != null) {
    return <Form onSubmit={submitUpdate} placeholder={edit.text} />;
  }

  return points.map((point, index) => (
    <div key={index}>
      <div key={point.id}>
        {point.text}
        <button
          onClick={() => {
            removePoint(point.id);
          }}
        >
          Remove
        </button>
        <button onClick={() => setEdit(point)}>Edit</button>
      </div>
    </div>
  ));
}

export default Points;
