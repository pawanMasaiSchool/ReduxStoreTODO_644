import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Todo/action";

const TodoInput = () => {
  const [inp, setInp] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const addAction = addTodo(inp);
    dispatch(addAction);
  };

  return (
    <div>
      <input
        placeholder="add something"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export { TodoInput };
