import { SAVE_TICKET } from '../actions/actionTypes';

const ticket = (ticket = { data: {} }, action) => {
  switch (action.type) {
  case SAVE_TICKET:
    return {
      data: {
        amount: action.payload.amount,
        email: action.payload.email,
        basket_reference: action.payload.basket_reference,
        id: action.payload.id,
        firstname: action.payload.firstname
        // Payment Status": "Pending",
        // "adultTicketTotal": 0.0,
        // "adult_tickets": 0,
        // "amount": 90.0,
        // "basket_reference": "3F7E2454D",
        // "created_on": "Sat, 28 Mar 2020 09:34:34 GMT",
        // "email": "lillyna@gmail.com",
        // "firstname": "Lillian",
        // "id": 2,
        // "kidsTicketTotal": 90.0,
        // "kids_tickets": 3,
        // "lastname": "Nabunya",
        // "total_tickets": 3
      }
    };

//   case REMOVE_TICKET:
//     return {
//       data: {}
//     };

  default:
    return ticket;
  }
};

export default ticket;
