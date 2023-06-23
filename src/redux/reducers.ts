import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './action';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    });
});

export default counterReducer;
