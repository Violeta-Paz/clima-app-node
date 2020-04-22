const axios = require('axios');

const getlugarlatlng = async( dir ) => {


    const encodedUlr = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,

        headers: { 'x-rapidapi-key': 'd91be6edbfmsh35b17e4755971cfp1ee4fajsn81a73db592db' }
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0 ) {
        throw new error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
   getlugarlatlng
}

