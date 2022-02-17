/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }): Promise<Response> {
    const response = await resolve(event);
    response.headers['Cache-Control'] = 'max-age=15, stale-while-revalidate=30, public';

    return response;
}
