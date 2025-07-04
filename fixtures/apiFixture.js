const JsonPlaceholderAPI = require('../api/JSONPlaceHolder.api');

const loadConfig = {
    url: 'https://jsonplaceholder.typicode.com'
};

async function apiFixture() {
    const jsonPlaceholderApi = new JsonPlaceholderAPI(loadConfig.url);
    return jsonPlaceholderApi;
}

module.exports = apiFixture;