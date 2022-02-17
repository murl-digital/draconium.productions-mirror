import sanityClient from '@sanity/client';
import { SANITY_DATASET, SANITY_PRJ_ID, SANITY_TOKEN } from '$lib/env';

const client = sanityClient({
    projectId: SANITY_PRJ_ID,
    dataset: SANITY_DATASET,
    apiVersion: '2021-12-14',
    token: SANITY_DATASET === 'development' ? SANITY_TOKEN : '',
    useCdn: !(SANITY_DATASET === 'development')
});

export default client;
