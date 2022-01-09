import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/Todo/action";

const TodoItem = ({ title, status, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const deletAct = deleteTodo(id);
    dispatch(deletAct);
  };
  return (
    <div style={{ display: "flex", margin: "10px", justifyContent: "center" }}>
      Title: {title} Status: {`${status}`}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export { TodoItem };
