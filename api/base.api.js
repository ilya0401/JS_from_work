const { chromium } = require('playwright');

class BaseApi {
    constructor(url) {
        this.baseUrl = url;
    }

    async get(endpoint = '', params = {}) {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const fullUrl = new URL(endpoint, this.baseUrl).href;
        const response = await context.request.get(fullUrl, { params });
        // await browser.close(); // Не рекомендуется закрывать браузер здесь
        return response;
    }
}

module.exports = BaseApi; // 👈 Экспортируем класс, а не объект!