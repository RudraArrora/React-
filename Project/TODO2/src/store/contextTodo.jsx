import { createContext } from "react";


export const Contxt = createContext({
  todoItem: [],
  onAdding: () => {},
  seeting : ()=>{}
});