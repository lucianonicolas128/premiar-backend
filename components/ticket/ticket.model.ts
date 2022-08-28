import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  company: String,
  number: String,
  buyer: {
    name: String,
    instagram: String,
    buyerProduct: Boolean,
    email: String,
    number: String,
    is_pay: Boolean,
  },
  is_sale: { type: Boolean, default: false },
});

export default mongoose.model('Ticket', TicketSchema);
