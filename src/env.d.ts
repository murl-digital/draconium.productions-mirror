/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DRC_SANITY_PRJ_ID?: string;
    readonly DRC_SANITY_DATASET?: 'development' | 'production';
    readonly DRC_SANITY_TOKEN?: string;
    readonly DRC_SENDGRID_TOKEN?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
