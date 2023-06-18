import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  dummyData: [
    {question: "Q1", answer: "A1"},
    {question: "Q2", answer: "A2"},
    {question: "Q3", answer: "A3"},
    {question: "Q4", answer: "A4"},
    {question: "Q5", answer: "A5"},
    {question: "Q6", answer: "A6"},
  ]
}

export const authSlice = createSlice({
  name: 'flashy',
  initialState,
  reducers: {
    updateDummyData: (state, action) => {
      state.dummyData = action.payload;
    },
  },
});

export const { updateDummyData } = authSlice.actions;
export default authSlice.reducer;