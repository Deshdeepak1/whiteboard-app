import { createContext } from "react";
import { TOOL_ACTION_TYPES } from "../constants";

const boardContext = createContext({
  activeToolItem: "",
  changeToolHandler: () => {},
  elements: [],
  toolActionType: TOOL_ACTION_TYPES.NONE,
  boardMouseDownHandler: () => {},
  boardMouseMoveHandler: () => {},
  boardMouseUpHandler: () => {},
  textAreaBlurHandler: () => {},
});

export default boardContext;
