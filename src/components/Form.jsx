import { useState } from "react";

function Form({ onSubmit }) {
  const [input, setInput] = useState("");
  const [num, setNum] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: num, text: input });
    setNum(num + 1);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={handleChange}
      />
      <button className="submit-btn">Submit</button>
    </form>
  );
}
export default Form;
