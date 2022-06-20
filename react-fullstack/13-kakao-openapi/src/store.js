import { configureStore } from '@reduxjs/toolkit';

import KaKaoSlice from './slices/KakaoSlice';

const store = configureStore({
    reducer: {
        kakao: KaKaoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;