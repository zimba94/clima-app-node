const axios = require('axios');


const getLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '9920838f6fmsh891dc275fa9caa4p13ea0bjsn0038ea31c46b',
            'useQueryString': 'true'
        }
    });

    const resp = await instance.get()


    if (resp.data.Results === null) {
        throw new Error("No hay datos - Null");
    } else if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    } else {
        console.log(resp.data.Results[0]);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };
}

module.exports = {
    getLatLng
}