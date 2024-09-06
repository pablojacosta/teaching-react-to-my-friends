export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

const toDos: IToDo[] = [
  { id: 1, text: "Todo 1", completed: false },
  { id: 2, text: "Todo 2", completed: false },
  { id: 3, text: "Todo 3", completed: false },
  { id: 4, text: "Todo 4", completed: false },
];

export const getToDosService = (): Promise<IToDo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(toDos), 5000);
  });
};
