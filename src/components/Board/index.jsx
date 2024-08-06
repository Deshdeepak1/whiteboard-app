import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import rough from "roughjs";
import { BOARD_ACTIONS, TOOL_ACTION_TYPES } from "../../constants";
import boardContext from "../../store/board-context";
import toolboxContext from "../../store/toolbox-context";

function Board() {
  const canvasRef = useRef();
  const {
    elements,
    toolActionType,
    boardMouseDownHandler,
    boardMouseMoveHandler,
    boardMouseUpHandler,
  } = useContext(boardContext);

  const { toolboxState } = useContext(toolboxContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // Better than useEffect to avoid flickering , this updates dom synchronously
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.save();

    const roughCanvas = rough.canvas(canvas);
    const generator = roughCanvas.generator;

    elements.forEach((element) => {
      roughCanvas.draw(element.roughEle);
    });

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [elements]);

  const handleMouseDown = (event) => {
    boardMouseDownHandler(event, toolboxState);
  };

  const handleMouseMove = (event) => {
    if (toolActionType === TOOL_ACTION_TYPES.DRAWING) {
      boardMouseMoveHandler(event);
    }
  };

  const handleMouseUp = (event) => {
    if (toolActionType === TOOL_ACTION_TYPES.DRAWING) {
      boardMouseUpHandler(event);
    }
  };
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}

export default Board;
