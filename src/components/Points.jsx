import { useState } from "react";

function Points({ points, removePoint, editPoint }) {
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
        <button
          onClick={() => {
            editPoint(point.id);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  ));
}

export default Points;
