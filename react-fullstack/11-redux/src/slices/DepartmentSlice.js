import React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
// ajax 요청을 위한 함수
// "getList에 대한 별칭(getList) 고유해야함, 앞에 department는 폴더 이름같은 느낌"       rejectWithValue는 에러 발생시 사용
export const getList = createAsyncThunk("department/getList", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        result = await axios.get('http://localhost:3001/department');
    } catch (err) {
        // 에러 발생시 'rejectWithValue()'함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
        //err.response 안에는 두개가 저장되어 있음 status(에러코드 200, 404, 500 ...), responsText(에러메세지)
        result = rejectWithValue(err.response);
    }

    return result;
});

//이렇게 위에 함수를 만든 후 Ajax처리 결과를 관리할 상태값을 여기 정리한다. 
const DepartmentSlice = createSlice({
    name: 'department',
    initialState: {
        data: null,         // Ajax 처리를 통해 수신된 데이터
        loading: false,     // 로딩 여부
        error: null         // 에러 정보
    },
    // 내부 action 및 동기 action 함수 , 그냥 reducer는 일반함수
    reducers: {},

    // 외부 action 및 비동기 action (Ajax를 처리하는건 extra를 앞에 붙혀줘야 한다.)
    // .pending(로딩중)  , fulfilled(ajax 성공), rejected(에러) 는 무조건 세트이다.
    // 이 세개가 상태값을 갱신하게 된다. 
    extraReducers: {    
//이 때 state로 기존의 상태값이 들어온다. || return result(ajax 결과값)이 payload로 들어온다.
        // .pending(로딩중) 
        [getList.pending]: (state, {payload}) =>{
             //그래서 파라미터로 들어오는 상태값을 참고해서 수정 한 후 리턴해준다. 
            return {...state, loading:true}
        },
        // fulfilled(ajax 성공)
        [getList.fulfilled]: (state, {payload}) => {
            return {
                // payload(ajax결과값)가 존재할 때만 data에 접근 하라는 뜻.                                                           
                data: payload?.data,
                loading:false,
                error: null
            }
        },
        //rejected(에러)
        // 에러 구간이니 위에 rejectWithValue라는 에러메세지 함수를 여기로 보내준다.
        // payload로 에러가 들어온다. 
        [getList.rejected]: (state, { payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText: 'Server Error'
                }
            }
        }
    },
});
// 리듀서 객체 내보내기
export default DepartmentSlice;