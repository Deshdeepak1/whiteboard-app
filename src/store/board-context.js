import { createContext } from "react";

const boardContext = createContext({
  activeToolItem: "",
  changeToolHandler: () => {},
  elements: [],
  toolActionType: "NONE",
  boardMouseDownHandler: () => {},
  boardMouseMoveHandler: () => {},
  boardMouseUpHandler: () => {},
});

export default boardContext;
