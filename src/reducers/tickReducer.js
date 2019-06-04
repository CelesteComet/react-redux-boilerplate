import { tick } from '../actions';

let defaultState = 0;

const tickReducer = (state = defaultState, action) => {
  let newState = state;
  switch (action.payload) {
    case 'DOWN':
      newState--;
    default:
      newState++;
  }
  return newState;
}

export default tickReducer;