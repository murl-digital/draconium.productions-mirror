import { browser } from '$app/env';

const isProd = process.env.NODE_ENV === 'production';

export const SANITY_PRJ_ID =
    !isProd && !browser ? process.env.DRC_SANITY_PRJ_ID : import.meta.env.DRC_SANITY_PRJ_ID;
export const SANITY_DATASET =
    !isProd && !browser ? process.env.DRC_SANITY_DATASET : import.meta.env.DRC_SANITY_DATASET;
export const SANITY_TOKEN =
    !isProd && !browser ? process.env.DRC_SANITY_TOKEN : import.meta.env.DRC_SANITY_TOKEN;
export const SENDGRID_TOKEN =
    !isProd && !browser ? process.env.DRC_SENDGRID_TOKEN : import.meta.env.DRC_SENDGRID_TOKEN;
