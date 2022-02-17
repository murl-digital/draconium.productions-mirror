import client from '$lib/sanity/sanity';
import urlFor from '$lib/sanity/imageUrl';
import type { EndpointOutput } from '@sveltejs/kit';
import dayjs from 'dayjs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<void | EndpointOutput> {
    const query = `*[_type == "release" && dateTime(goLiveDate.utc) <= dateTime('${dayjs(
        new Date()
    ).toISOString()}')] | order(releaseDate desc) [0..5]`;
    const mainSelector =
        '{"slug": slug.current, displayName, description, type, releaseDate, artwork, "primaryColor": primary.hex, "secondaryColor": secondary.hex}';

    const result = await client.fetch(query + mainSelector);

    if (result && result.length !== 0)
        return {
            body: result.map((i) => {
                return {
                    slug: i.slug,
                    displayName: i.displayName,
                    description: i.description,
                    type: i.type,
                    releaseDate: i.releaseDate,
                    primaryColor: i.primaryColor,
                    secondaryColor: i.secondaryColor,
                    artworkUrl: urlFor(i.artwork).width(250).height(250).auto('format').url()
                };
            })
        };

    return {
        body: []
    };
}
