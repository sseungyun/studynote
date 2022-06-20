import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from './slices/weatherSlice';

const store = configureStore({
    reducer: {
        weather: weatherSlice
    },
    middleware: ( getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools : true
});

export default store;