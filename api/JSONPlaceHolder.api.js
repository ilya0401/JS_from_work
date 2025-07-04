const BaseApi = require('./base.api'); // 👈 Импортируем класс

class JsonPlaceholderAPI extends BaseApi {
    constructor(url) {
        super(url);
    }

    async getPosts() {
        const POSTS_PARAM = 'posts';
        const response = await this.get(POSTS_PARAM);
        const posts = await response.json();
        return posts;
    }
}

module.exports = JsonPlaceholderAPI; // 👈 Экспортируем класс