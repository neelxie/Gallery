import { SAVE_TICKET } from './actionTypes';

const saveTicket = (ticket) => ({
  type: SAVE_TICKET,
  payload: ticket
});

export default saveTicket;
