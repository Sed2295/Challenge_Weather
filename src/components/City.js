import React,{useEffect, useState} from 'react';
import { getForecast } from './helpers/getForecast';
import { Table } from './Table';

export const City = ({card}) => {
    const [cityx, setCityx] = useState([]);
    useEffect(() => {        
        getForecast(card).then(data => {
                var data2 = Object.values(data);
                //console.log(data2);
                setCityx(data2);
            })    
    }, [card])
    return (
        <>            
            <div className="row mt-3">
                <h2 className="text-center">Pronostico para los siguientes días</h2> 
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="card border-dark mb-3">
                        <div className="card-header bg-transparent border-dark text-secondary fs-4 fw-bold text-center">{card.split(",")[0]}
                        </div>
                            <div className="card-body ">
                                {
                                    cityx.length && cityx.map((item,index)=>( 
                                        <Table key={index} ciudad={item}/>
                                    ))
                                }                                
                            </div>                        
                    </div>
                </div> 
            </div>                                
        </>
    )
}
