import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL =  "http://apis.data.go.kr/1360000/VilageFcstMsgService/getLandFcst";


const API_KEY = "DMDgjHlnN3%2F%2FrBUXweG%2FWAFwsQSnvbsV%2BLZGOnPqj2uBFtW3rOkXt0gIOAoxzOBo%2FmSCBtzs%2FY85sAiLm80Awg%3D%3D"

export const getWeatherSearch = createAsyncThunk("weatherSlice/getWeatherSearch", async (payload, {rejectWithValue}) => {
    let result = null;
    let a = "1";
    let b = "10";
    let c = 'JSON';
    let d = "108";

    try {
        result = await axios.get("http://apis.data.go.kr/1360000/VilageFcstMsgService", {
            params: {
                ServiceKey: API_KEY,
                pageNo: a,
                numOfRows: b,
                dataType: c,
                stnld: d,
            },
          
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
}
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: { 
        body: null,
        loading: null,
        error: null,
    },
    reducers:{},
    extraReducers: {
        [getWeatherSearch.pending]: (state, {payload}) => {
            return {...state, loading: true}
        },
        [getWeatherSearch.fulfilled]: (state, { payload }) => {
            return {
                body: payload,
                loading: false,
                error: null,
            };
        },
        [getWeatherSearch.rejected]: (state, {payload}) => {
            return {
                body: null,
                loading: false,
                error : {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : "Server Error",
                }
            }
        }
    },
});

export default weatherSlice.reducer;