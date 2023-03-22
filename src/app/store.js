/** @format */

import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from "../features/ticketSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const store = configureStore({
  reducer: { firebase: TicketSlice },
  middleware,
});

export default store;
