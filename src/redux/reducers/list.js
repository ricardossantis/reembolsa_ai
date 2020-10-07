import { BLUE, YELLOW, RAINBOW } from "../actions/list";

const defaultState = [];

const list = (state = defaultState, action) => {
  switch (action.type) {
    case BLUE:
      return action.list;
    case YELLOW:
      return action.list;
    case RAINBOW:
      break;
    default:
      return state;
  }
};

export { list };
