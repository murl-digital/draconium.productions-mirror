import type { EndpointOutput } from '@sveltejs/kit';
import client from '$lib/sanity/sanity';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<void | EndpointOutput> {
    const query = `*[_type == 'discordLink']`;
    const mainSelector = '{enabled, link}';

    const result = await client.fetch(query + mainSelector);

    return {
        body: {
            ...result[0]
        }
    };
}
