import client from '$lib/sanity/sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export default function urlFor(source: SanityImageSource): ImageUrlBuilder {
    return builder.image(source);
}
