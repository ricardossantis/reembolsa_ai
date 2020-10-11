import { BLUE, YELLOW, RAINBOW, FILTERED } from "../actions/list";

const defaultState = [];

const list = (state = defaultState, action) => {
  switch (action.type) {
    case BLUE:
      return action.list;
    case YELLOW:
      return action.list;
    case RAINBOW:
      return action.list;
    default:
      return state;
  }
};

export { list };
