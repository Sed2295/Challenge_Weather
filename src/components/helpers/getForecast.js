export const getForecast = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=455fde1c7e835780be24c20c008a06f9`;
    const res = await fetch(url);
    const datos = await res.json();
    return filterForecast(datos);
}
const filterForecast = (datos) => {
    
    const regex = /\d{4}-\d{2}-\d{2}\s(06|12|18)/;
    const arr = [];
    datos.list.forEach((item) => {
        if (item.dt_txt.match(regex)) {
            arr.push({
               day:item.dt_txt,
               temp: item.main.temp,
               humidity: item.main.humidity,
               wind: item.wind.speed
            })
        }
    })
    //Ordering by day
    const dates = {};
    arr.forEach((item) => {
        let day = item.day.split(" ")[0];
        if (dates[day] === undefined) {
            dates[day] = [];
            dates[day].push(item);
        }else {
            dates[day].push(item);
        }
    })
    return dates;
}