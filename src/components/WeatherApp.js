import React,{useState} from 'react';
//import { Info } from './Info';
export const WeatherApp = () => { 
    const [city] = useState(['Buenos Aires,ar','Bogota,col','Ciudad de Mexico,mx','Madrid,es','Lima,pe']);    
    return (
        <>            
            <div className="row">
                <h1 className="text-success">Weather App</h1> 
            </div>
            <hr/>
            <div className="row justify-content-center mt-3 informa">         
                {/* {
                    city.map(cit => (
                        <Info key={cit} city={cit} />
                    ))
                } */}
            </div>                       
        </>
    )
}
