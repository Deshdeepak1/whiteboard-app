import { useContext } from "react";
import classes from "./index.module.css";

import cx from "classnames";

import {
  FaSlash,
  FaRegCircle,
  FaEraser,
  FaArrowRight,
  FaDownload,
  FaFont,
  FaPaintBrush,
  FaUndoAlt,
  FaRedoAlt,
} from "react-icons/fa";

import { LuRectangleHorizontal } from "react-icons/lu";
import boardContext from "../../store/board-context";
import { TOOL_ITEMS } from "../../constants.js";

const Toolbar = () => {
  console.log("Toolbar rendered");
  const { activeToolItem, changeToolHandler, undo, redo } =
    useContext(boardContext);

  const handleDownloadClick = () => {
    const canvas = document.getElementById("canvas");
    const data = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = data;
    const curr_date_time = new Date();
    const curr_date = curr_date_time.toLocaleDateString().replace(/\//g, "-");
    const curr_time = curr_date_time.toLocaleTimeString("en-US", {hour12: false}).replace(/:/g, "-");
    anchor.download = `board_${curr_date}_${curr_time}.png`;
    anchor.click();
  };

  return (
    <div className={classes.container}>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.BRUSH,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.BRUSH)}
      >
        <FaPaintBrush />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.LINE,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.LINE)}
      >
        <FaSlash />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.RECTANGLE,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.RECTANGLE)}
      >
        <LuRectangleHorizontal />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.CIRCLE,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.CIRCLE)}
      >
        <FaRegCircle />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.ARROW,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.ARROW)}
      >
        <FaArrowRight />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.ERASER,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.ERASER)}
      >
        <FaEraser />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.TEXT,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.TEXT)}
      >
        <FaFont />
      </div>
      <div className={cx(classes.toolItem)} onClick={undo}>
        <FaUndoAlt />
      </div>
      <div className={cx(classes.toolItem)} onClick={redo}>
        <FaRedoAlt />
      </div>
      <div className={cx(classes.toolItem)} onClick={handleDownloadClick}>
        <FaDownload />
      </div>
    </div>
  );
};

export default Toolbar;
