import React,{useState} from 'react';
import { City } from './City';
import { useGetWeather } from './hooks/useGetWeather';

export const Info = ({city}) => {
    const {name,tempe,speed, humidity} = useGetWeather(city);
    const [selectedCard,setSelectedCard] = useState(null);   
    return(
        <>     
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <div className="card border-info mb-3 text-center cardss" key={city} onClick={() => {setSelectedCard(city)}}>
                    <div className="card-header bg-transparent border-info text-info fs-4 fw-bold">{name}</div>
                        <div className="card-body">
                            <p className="card-title fs-1 fw-bold">{tempe}°C </p>                            
                        </div>
                    <div className="card-footer bg-transparent border-info">Humedad: {humidity}% Viento: {speed}m/s</div>
                </div>
            </div>
            {
                selectedCard && <City card={selectedCard}/>             
            }  
        </>      
    )
}
