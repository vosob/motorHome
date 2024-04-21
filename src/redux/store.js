import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';

import cardReducer from '../redux/vehicleCard/cardSlice';

const persistConfig = {
  key: 'rent',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cardReducer);

const store = configureStore({
  reducer: {
    rent: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import cardReducer from '../redux/vehicleCard/cardSlice';

// const store = configureStore({
//   reducer: {
//     rent: cardReducer,
//   },
// });

// export default store;
