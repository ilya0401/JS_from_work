const { test, expect } = require('@playwright/test');
const apiFixture = require('../fixtures/apiFixture');

test.describe('TestJsonPlaceholder', () => {
    let jsonPlaceholderApi;

    test.beforeEach(async () => {
        jsonPlaceholderApi = await apiFixture();
    });

    test('Проверка успешного получения постов', async () => {
        const posts = await jsonPlaceholderApi.getPosts();
        expect(posts).toBeTruthy();
        expect(posts.length).toBeGreaterThan(0);
    });

    test('Проверка статус-кода 200', async () => {
        const response = await jsonPlaceholderApi.get('posts');
        expect(response.status()).toBe(200);
    });

    test('Проверка Content-Type', async () => {
        const response = await jsonPlaceholderApi.get('posts');
        const headers = response.headers();
        expect(headers['content-type']).toContain('application/json');
    });
});