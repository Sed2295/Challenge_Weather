export const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=455fde1c7e835780be24c20c008a06f9`;
    const res = await fetch(url);
    const datos = await res.json();
    const {main:{temp,humidity},wind:{speed},name} = datos;
    return {
        name,
        tempe : parseInt(temp),
        humidity,
        speed
    }
}