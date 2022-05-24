import {FETCH,CREATE,UPDATE,DELETE} from '../TicketActions/actionType.js'

export default (tickets = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload.data;
    case CREATE:
      return [ action.payload.ticket,...tickets];
    case UPDATE:
      return tickets.map((ticket) =>
        ticket._id === action.payload._id ? action.payload : ticket
      );
    case DELETE:
      return tickets.map((ticket) =>
        ticket._id === action.payload._id ? action.payload : ticket
      );
    default:
      return tickets;
  }
};
