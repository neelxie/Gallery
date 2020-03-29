import { SAVE_TICKET } from '../actions/actionTypes';

const initialState = {
  data: [],
  message: 'Ticket Failed'
};

const ticket = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_TICKET:
    return {
      ...state,
      data: action.payload,
      message: 'Ticket has been made.'
    };

  default:
    return state;
  }
};

export default ticket;
