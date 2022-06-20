import React, {memo} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { getWeatherSearch } from './slices/weatherSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const [body, loading, error] = useSelector((state) => state.weather);

    React.useEffect(() => {
        dispatch(getWeatherSearch())
    }, [dispatch]);

    return (
      <div>
          hi
      </div>
    )
})

export default Test;