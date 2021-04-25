import React from 'react';
export const Table = ({ciudad}) => {
    const date = ciudad[0].day.split(' ')[0];
    return (
        <>
            <h3 className="text-danger text-left fw-bold">{date}</h3>
                <div className="table-responsive">
                    <table className="table table-hover  table-sm table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Horario</th>
                                <th scope="col">Temperatura</th>
                                <th scope="col">Humedad</th>
                                <th scope="col">Viento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">06:00 Hrs</th>
                                <td>{ciudad[0] ? `${ciudad[0].temp} °C` : 's/n datos'}</td>
                                <td>{ciudad[0] ? `${ciudad[0].humidity} %` : 's/n datos'}</td>
                                <td>{ciudad[0] ? `${ciudad[0].wind} m/s` : 's/n datos'}</td>
                            </tr>
                            <tr>
                                <th scope="row">12:00 Hrs</th>
                                <td>{ciudad[1] ? `${ciudad[1].temp} °C` : 's/n datos'}</td>
                                <td>{ciudad[1] ? `${ciudad[1].humidity} %` : 's/n datos'}</td>
                                <td>{ciudad[1] ? `${ciudad[1].wind} m/s` : 's/n datos'}</td>
                            </tr>
                            <tr>
                                <th scope="row">18:00 Hrs</th>
                                <td>{ciudad[2] ? `${ciudad[2].temp}°C` : 's/n datos'}</td>
                                <td>{ciudad[2] ? `${ciudad[2].humidity} %` : 's/n datos'}</td>
                                <td>{ciudad[2] ? `${ciudad[2].wind} m/s` : 's/n datos'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>           
        </>
    )
}
