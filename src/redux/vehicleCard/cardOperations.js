import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://66210f943bf790e070b1b2f9.mockapi.io/motorHome';

export const getVehicle = createAsyncThunk(
  'motorHome',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
