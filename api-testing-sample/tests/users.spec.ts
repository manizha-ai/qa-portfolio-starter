import { expect, test } from '@playwright/test';

test.describe('HTTPBin API validation', () => {
  test('returns query parameters from a GET request', async ({ request }) => {
    const response = await request.get('/get?project=qa-portfolio&type=api');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.args.project).toBe('qa-portfolio');
    expect(body.args.type).toBe('api');
    expect(body.url).toContain('/get');
  });

  test('returns submitted data from a POST request', async ({ request }) => {
    const response = await request.post('/post', {
      data: {
        name: 'Mani QA',
        role: 'Senior Quality Engineer'
      }
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.json.name).toBe('Mani QA');
    expect(body.json.role).toBe('Senior Quality Engineer');
    expect(body.url).toContain('/post');
  });

  test('returns 404 for a missing endpoint', async ({ request }) => {
    const response = await request.get('/status/404');

    expect(response.status()).toBe(404);
  });
});
