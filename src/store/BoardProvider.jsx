import { useReducer, useState } from "react";
import { BOARD_ACTIONS, TOOL_ACTION_TYPES, TOOL_ITEMS } from "../constants";
import boardContext from "./board-context";
import rough from "roughjs/bin/rough";

const gen = rough.generator();

const boardReducer = (state, action) => {
  switch (action.type) {
    case BOARD_ACTIONS.CHANGE_TOOl: {
      return {
        ...state,
        activeToolItem: action.payload,
      };
    }
    case BOARD_ACTIONS.DRAW_DOWN: {
      const { clientX, clientY } = action.payload;
      const newElement = {
        id: state.elements.length,
        x1: clientX,
        y1: clientY,
        x2: clientX,
        y2: clientY,
        roughEle: gen.line(clientX, clientY, clientX, clientY),
      };

      const prevElements = state.elements;
      return {
        ...state,
        toolActionType: TOOL_ACTION_TYPES.DRAWING,
        elements: [...prevElements, newElement],
      };
    }

    case BOARD_ACTIONS.DRAW_UP: {
      return { ...state, toolActionType: TOOL_ACTION_TYPES.NONE };
    }

    case BOARD_ACTIONS.DRAW_MOVE: {
      const { clientX, clientY } = action.payload;
      const newElements = [...state.elements];
      const index = state.elements.length - 1;
      const element = newElements[index];
      element.x2 = clientX;
      element.y2 = clientY;
      element.roughEle = gen.line(element.x1, element.y1, clientX, clientY);
      return { ...state, elements: newElements };
    }
    default:
      return state;
  }
};

const initialBoardState = {
  activeToolItem: TOOL_ITEMS.LINE,
  elements: [],
  toolActionType: TOOL_ACTION_TYPES.NONE,
};

const BoardProvider = ({ children }) => {
  const [boardState, dispatchBoardAction] = useReducer(
    boardReducer,
    initialBoardState,
  );

  const changeToolHandler = (tool) => {
    dispatchBoardAction({ type: BOARD_ACTIONS.CHANGE_TOOl, payload: tool });
  };

  const boardMouseDownHandler = (event) => {
    const { clientX, clientY } = event;
    const roughEle = gen.line(clientX, clientY, clientX, clientY);
    dispatchBoardAction({
      type: BOARD_ACTIONS.DRAW_DOWN,
      payload: { clientX, clientY },
    });
  };

  const boardMouseMoveHandler = (event) => {
    const { clientX, clientY } = event;
    const roughEle = gen.line(clientX, clientY, clientX, clientY);
    dispatchBoardAction({
      type: BOARD_ACTIONS.DRAW_MOVE,
      payload: { clientX, clientY },
    });
  };

  const boardMouseUpHandler = () => {
    dispatchBoardAction({
      type: BOARD_ACTIONS.DRAW_UP,
    });
  };

  const boardContextValue = {
    activeToolItem: boardState.activeToolItem,
    changeToolHandler,
    elements: boardState.elements,
    toolActionType: boardState.toolActionType,
    boardMouseDownHandler,
    boardMouseMoveHandler,
    boardMouseUpHandler,
  };

  return (
    <boardContext.Provider value={boardContextValue}>
      {children}
    </boardContext.Provider>
  );
};

export default BoardProvider;
