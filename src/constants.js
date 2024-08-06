export const TOOL_ITEMS = {
  LINE: "LINE",
  RECTANGLE: "RECTANGLE",
  CIRCLE: "CIRCLE",
  ARROW: "ARROW",
  TEXT: "TEXT",
};

export const TOOL_ACTION_TYPES = {
  NONE: "NONE",
  DRAWING: "DRAWING",
};

export const BOARD_ACTIONS = {
  CHANGE_TOOl: "CHANGE_TOOL",
  DRAW_DOWN: "DRAW_DOWN",
  DRAW_MOVE: "DRAW_MOVE",
  DRAW_UP: "DRAW_UP",
};

export const COLORS = {
  BLACK: "#000000",
  RED: "#ff0000",
  GREEN: "#00ff00",
  BLUE: "#0000ff",
  ORANGE: "#ffa500",
  YELLOW: "#ffff00",
  WHITE: "#ffffff",
};

export const TOOLBOX_ACTIONS = {
  CHANGE_STROKE: "CHANGE_STROKE",
  CHANGE_FILL: "CHANGE_FILL",
  CHANGE_SIZE: "CHANGE_SIZE",
};

export const FILL_TOOL_TYPES = [TOOL_ITEMS.RECTANGLE, TOOL_ITEMS.CIRCLE];
export const STROKE_TOOL_TYPES = [
  TOOL_ITEMS.LINE,
  TOOL_ITEMS.RECTANGLE,
  TOOL_ITEMS.CIRCLE,
  TOOL_ITEMS.ARROW,
];
export const SIZE_TOOL_TYPES = [
  TOOL_ITEMS.LINE,
  TOOL_ITEMS.RECTANGLE,
  TOOL_ITEMS.CIRCLE,
  TOOL_ITEMS.ARROW,
];

export const ARROW_LENGTH = 20;
