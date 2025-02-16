import request from './index.js';
import app from './index.js'; // Import your Express app

describe('NASA API Backend Tests', () => {
    test('GET /apod should return APOD data', async () => {
        const response = await request(app).get('/apod');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title');
        expect(response.body).toHaveProperty('url');
    });

    test('GET /mars-rover-photos should return rover photos', async () => {
        const response = await request(app).get('/mars-rover-photos?rover=curiosity&camera=navcam&sol=1000');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('photos');
        expect(Array.isArray(response.body.photos)).toBe(true);
    });

    test('GET /rover-manifest should return manifest data', async () => {
        const response = await request(app).get('/rover-manifest?rover=curiosity');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('photo_manifest');
    });
});
