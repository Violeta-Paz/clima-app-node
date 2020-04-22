const axios = require('axios');

const getclima = async( lat, lng ) =>{

 const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a6eeac21fc573eb6dfb5cbc1806b5c16&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getclima       
}        