/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, filterTicketsByDate, searchData } from "../api";

export const fetchTicket = createAsyncThunk("firebase/fetchTicket", fetchData);

export const findTicketByDate = createAsyncThunk(
  "firebase/sortTicket",
  filterTicketsByDate
);

const initialState = {
  data: [],
  status: "idle",
  isLoading: false,
  error: null,
};

export const searchTicket = createAsyncThunk(
  "firebase/searchTicket",
  searchData
);

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicket.pending, (state) => {
        Object.assign(state, {
          isLoading: true,
        });
      })
      .addCase(fetchTicket.fulfilled, (state, action) => {
        Object.assign(state, {
          isLoading: false,
          status: "succeeded",
          data: action.payload,
        });
      })
      .addCase(fetchTicket.rejected, (state, action) => {
        Object.assign(state, {
          isLoading: false,
          status: "failed",
          error: action.error.message,
        });
      })
      .addCase(findTicketByDate.pending, (state, action) => {
        Object.assign(state, {
          isLoading: true,
        });
      })
      .addCase(findTicketByDate.fulfilled, (state, action) => {
        Object.assign(state, {
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(searchTicket.pending, (state, action) => {
        Object.assign(state, {
          isLoading: true,
        });
      })
      .addCase(searchTicket.fulfilled, (state, action) => {
        Object.assign(state, {
          isLoading: false,
          data: action.payload,
        });
      });
  },
});

export default ticketSlice.reducer;
