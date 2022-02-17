import client from '$lib/sanity/sanity';
import urlFor from '$lib/sanity/imageUrl';
import type { EndpointOutput } from '@sveltejs/kit';
import dayjs from 'dayjs';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }): Promise<void | EndpointOutput> {
    const { slug } = params;
    const query = `*[_type == "release" && slug.current == $reqSlug && dateTime(goLiveDate.utc) <= dateTime('${dayjs(
        new Date()
    ).toISOString()}')]`;
    const mainSelector =
        '{displayName, type, releaseDate, isrc, "goLiveDate": goLiveDate.utc, "links": links[]{link, presave, title, type}, artwork, background, "primaryColor": primary.hex, "secondaryColor": secondary.hex}';
    const queryParams = { reqSlug: slug };

    const result = await client.fetch(query + mainSelector, queryParams);

    if (result && result.length !== 0) {
        const {
            displayName,
            type,
            releaseDate,
            isrc,
            goLiveDate,
            links,
            primaryColor,
            secondaryColor
        } = result[0];
        const partialResponse = {
            displayName,
            type,
            releaseDate,
            isrc,
            goLiveDate,
            links,
            primaryColor,
            secondaryColor
        };

        return {
            body: {
                ...partialResponse,
                artworkUrl: urlFor(result[0].artwork).width(500).height(500).auto('format').url(),
                backgroundUrl: urlFor(result[0].background).auto('format').blur(200).url()
            }
        };
    }

    return {
        status: 404
    };
}
