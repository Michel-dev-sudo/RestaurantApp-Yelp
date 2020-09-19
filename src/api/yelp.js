import axios from 'axios';

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:
        'Bearer OLm6mTeWKm67xlxySfQveuvsDtexXPJ6MrfIBxISSzphxTaAD2lTqq2brYmITk3uKNAKIOTLmKSIpeejCP3UHydBfXFuameqAibjkEaK4cICPpFk0DIHdlr6Y0lHX3Yx'
    }

}); 