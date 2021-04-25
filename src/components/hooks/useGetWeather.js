import { useState,useEffect } from 'react';
import {getWeather} from '../helpers/getWeather';

export const useGetWeather = (city) => {
    const [state, setstate] = useState({ciudad:{}});
    useEffect( () => {
        getWeather(city)
            .then(ciudad => {
                setstate({
                    ...ciudad
                })                             
            })
    },[city])
    return state;
}