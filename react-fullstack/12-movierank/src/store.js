import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import MovieRankSlice from './slices/MovieRankSlice';

const store = configureStore({
    reducer: {
        movieRank : MovieRankSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;