import { tick } from '../actions';
import { cloneDeep } from 'lodash';

let defaultState = 0;

const tickReducer = (state = defaultState, action) => {
  let newState = cloneDeep(state);
  switch (action.payload) {
    case 'DOWN':
      newState--;
    default:
      newState++;
  }
  return newState;
}

export default tickReducer;