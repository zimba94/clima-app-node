const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=43cce04336282f8f9cb4ed733da6ff95&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}