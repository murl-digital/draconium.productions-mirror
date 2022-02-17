import type { EndpointOutput } from '@sveltejs/kit';
import client from '$lib/sanity/sanity';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<void | EndpointOutput> {
    const query = '*[_type == "socialLink"]';
    const selector = '{name, link, isUrl, text}';
    const pipes = 'order(name asc, isUrl desc)';

    const result = await client.fetch(query + selector + `|${pipes}`);

    return {
        body: result
    };
}