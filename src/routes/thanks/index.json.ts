import type { EndpointOutput } from '@sveltejs/kit';
import client from '$lib/sanity/sanity';
import urlFor from '$lib/sanity/imageUrl';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<void | EndpointOutput> {
    const query = `*[_type == "artist"]`;
    const mainSelector = '{name, category, works, "links": links[]{title, link}}';

    const result = await client.fetch(query + mainSelector);

    if (result && result.length !== 0)
        return {
            body: {
                artists: result.map((i) => {
                    return {
                        name: i.name,
                        category: i.category,
                        links: i.links,
                        works: i.works.map((w) => urlFor(w).auto('format').height(300).url())
                    };
                })
            }
        };

    return {
        body: []
    };
}
