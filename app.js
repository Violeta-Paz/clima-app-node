

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

//lugar.getlugarlatlng(argv.direccion)
//.then( console.log );

//clima.getclima(40.750000,-74.000000)
//.then( console.log )
//.catch( console.log);


const getinfo = async (direccion) => {

    try {
        const coords = await lugar.getlugarlatlng(direccion);
        const temp = await clima.getclima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}. `
    } catch (e) {
       return `No se pudo determinar el clima de ${direccion}.`
    }

}

getinfo(argv.direccion)
    .then( console.log)
    .catch( console.log);