import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltjs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        })
    ],

    kit: {
        trailingSlash: 'never',
        adapter: vercel()
    },
    vite: {
        envPrefix: 'DRC_',
        define: {
            'process.env': process.env
        },
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: "[name].[ext]"
                }
            }
        }
    }
};

export default config;
