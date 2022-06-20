import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import CounterSlice from './slices/CounterSlice';
import departmentSlice from './slices/DepartmentSlice';


const logger = createLogger();

const store = configureStore({
    reducer: {
        // 개발자가 직접 작정한 reducer들이 명시되어야 한다.
        counter: CounterSlice,
        // !!! 앞으로 들어가는 key 이름은 DepartmentSlice 폴더 name : department 와 동일해야한다
        department: departmentSlice
    },
    // 미들 웨어를 사용하지 않을 경우 이 라인 생략 가능 (redux-thunk 사용시 필수)
    
                                    //Ajax연동할때 반드시 들어가야 한다.
    middleware: [...getDefaultMiddleware({serializableCheck:false}), logger],
    // redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
    devTools: true
});

export default store;