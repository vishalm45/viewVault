require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.TMDB_API_KEY;
const readAccessToken = process.env.TMDB_ACCESS_TOKEN;

const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'Authorization': `Bearer ${readAccessToken}`,
        'Content-Type': 'application/json;charset=utf-8'
    }
});

async function getPopularMovies() {
    try {
        const response = await tmdbApi.get(`/movie/popular?api_key=${apiKey}`);
        console.log(response.data);
    } catch(error) {
        console.error('Error fetching popular movies:', error);
    }
}

//getPopularMovies();