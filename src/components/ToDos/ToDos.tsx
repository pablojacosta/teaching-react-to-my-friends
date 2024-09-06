import { useEffect, useState } from "react";
import { getToDosService, IToDo } from "../../services/toDos/getToDosService";

const ToDos = () => {
  const [toDosList, setList] = useState<IToDo[] | undefined>();

  useEffect(() => {
    getToDosService().then((toDos) => setList(toDos));
  }, []);

  if (!toDosList) {
    return <p>LOADING...</p>;
  }

  const handleOnClick = (id: number) => {
    setList(
      toDosList.map((toDo) => ({
        ...toDo,
        completed: toDo.id === id ? !toDo.completed : toDo.completed,
      }))
    );
  };

  return (
    <ul className="toDos">
      {toDosList.map((toDo) => (
        <li
          key={toDo.id}
          style={{
            textDecoration: toDo.completed ? "line-through" : "",
          }}
        >
          <p>{toDo.completed ? `${toDo.text} 🎉` : toDo.text}</p>
          <button onClick={() => handleOnClick(toDo.id)}>Done</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDos;
