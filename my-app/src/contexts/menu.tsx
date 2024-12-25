import { createContext } from "react";

export const menuContext = createContext({
  state: false,
  set: (value: boolean) => {
    console.log(value);
  },
});