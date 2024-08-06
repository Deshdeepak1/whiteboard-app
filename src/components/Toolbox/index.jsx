import { COLORS, FILL_TOOL_TYPES, STROKE_TOOL_TYPES } from "../../constants";
import classes from "./index.module.css";

import cx from "classnames";
import { useContext } from "react";
import boardContext from "../../store/board-context";
import toolboxContext from "../../store/toolbox-context";

const Toolbox = () => {
  const { activeToolItem } = useContext(boardContext);
  const { toolboxState, changeStroke, changeFill } = useContext(toolboxContext);

  const strokeColor = toolboxState[activeToolItem]?.stroke;
  const fillColor = toolboxState[activeToolItem]?.fill;

  return (
    <div className={classes.container}>
      {STROKE_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
          <div className={classes.toolboxLabel}>Stroke Color</div>
          <div className={classes.colorsContainer}>
            {Object.keys(COLORS).map((k) => {
              return (
                <div
                  className={cx(classes.colorBox, {
                    [classes.activeColorBox]: strokeColor === COLORS[k],
                  })}
                  style={{ backgroundColor: COLORS[k] }}
                  onClick={() => changeStroke(activeToolItem, COLORS[k])}
                ></div>
              );
            })}
          </div>
        </div>
      )}
      {FILL_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
          <div className={classes.toolboxLabel}>Fill Color</div>
          <div className={classes.colorsContainer}>
            {Object.keys(COLORS).map((k) => {
              return (
                <div
                  className={cx(classes.colorBox, {
                    [classes.activeColorBox]: fillColor === COLORS[k],
                  })}
                  style={{ backgroundColor: COLORS[k] }}
                  onClick={() => changeFill(activeToolItem, COLORS[k])}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
