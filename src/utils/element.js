import { ARROW_LENGTH, TOOL_ITEMS } from "../constants";
import rough from "roughjs/bin/rough";
import { getArrowHeadCoordinates } from "./math";

const gen = rough.generator();

export const createRoughElement = (
  id,
  x1,
  y1,
  x2,
  y2,
  { type, stroke, fill },
) => {
  const element = {
    id,
    x1,
    y1,
    x2,
    y2,
    type,
    fill,
    stroke,
  };

  const options = {
    seed: id + 1,
    fillStyle: "solid",
  };

  if (stroke) {
    options.stroke = stroke;
  }

  if (fill) {
    options.fill = fill;
  }

  switch (type) {
    case TOOL_ITEMS.LINE: {
      element.roughEle = gen.line(x1, y1, x2, y2, options);
      break;
    }

    case TOOL_ITEMS.RECTANGLE: {
      element.roughEle = gen.rectangle(x1, y1, x2 - x1, y2 - y1, options);
      break;
    }

    case TOOL_ITEMS.CIRCLE: {
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;
      element.roughEle = gen.ellipse(cx, cy, x2 - x1, y2 - y1, options);
      break;
    }

    case TOOL_ITEMS.ARROW: {
      const { x3, y3, x4, y4 } = getArrowHeadCoordinates(
        x1,
        y1,
        x2,
        y2,
        ARROW_LENGTH,
      );
      const points = [
        [x1, y1],
        [x2, y2],
        [x3, y3],
        [x2, y2],
        [x4, y4],
      ];
      element.roughEle = gen.linearPath(points, options);
      break;
    }
  }
  return element;
};
