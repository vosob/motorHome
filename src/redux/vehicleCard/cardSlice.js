import { createSlice } from '@reduxjs/toolkit';

import { getVehicle } from './cardOperations';

const initialState = {
  all: [],
  currentPage: 4,
  perPage: 4,
  location: '',
  equipment: {
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    ShowerWC: false,
  },
  vehicleType: '',
  liked: [],
};

const cardSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLiked: (state, action) => {
      state.liked.push(action.payload);
    },
    setAllFilters: (state, action) => {
      state.location = action.payload.location;
      state.equipment = action.payload.equipment;
      state.vehicleType = action.payload.vehicleType;
    },
    setResetFilters: (state) => {
      state.location = '';
      state.equipment = {
        AC: false,
        Automatic: false,
        Kitchen: false,
        TV: false,
        ShowerWC: false,
      };
      state.vehicleType = '';
    },
    setDeleteLiked: (state, action) => {
      state.liked = state.liked.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVehicle.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});

export default cardSlice.reducer;
export const {
  setCurrentPage,
  setAllFilters,
  setLiked,
  setDeleteLiked,
  setResetFilters,
} = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
