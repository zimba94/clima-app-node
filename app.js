const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        deman: true
    }
}).argv;

//console.log(argv.direccion);

// lugar.getLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    //const { dir, lat, lng } = await lugar.getLatLng(direccion);
    const coords = await lugar.getLatLng(direccion);
    const temp = await clima.getClima(coords.lat, cords.lng);

    try {
        return `La temperatura de ${coords.dir} es de ${temp} C°`;
    } catch (e) {
        return `No se pudo encontrar la temperatura de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);