import { Dispatch, SetStateAction } from "react";

export type TTodo = {
  title: string;
  completed: boolean;
  _id: string;
};

export type TodoProps = {
  todo: TTodo;
  setFetchTodos: Dispatch<SetStateAction<boolean>>;
  setIsDeleteLoading: Dispatch<SetStateAction<boolean>>;
  setIsUpdateLoading: Dispatch<SetStateAction<boolean>>;
  isDeleteLoading: boolean;
};
