<script context='module'>
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                status: status,
                message: error.message
            }
        };
    }
</script>

<script lang='ts'>
    import { color, showLogo } from '$lib/components/navbar/navbarStores';

    export let status;
    export let message;

    $showLogo = true;
    $color = '#000000';
</script>

<svelte:head>
    <title>{status === 404 ? 'Not Found' : 'Something has gone wrong'} | DRACONIUM</title>
</svelte:head>

<div class='not-container'>
    {#if status === 404}
        <h1>This is a dead end</h1>
        <h2>Error code 404: Not found</h2>
    {:else}
        <h1>Something has gone wrong</h1>
        <h2>Error code {status}: {message ? message : 'No error message provided'}</h2>
    {/if}
</div>

<style>
    .not-container {
        @apply h-screen flex flex-col justify-center items-center pointer-events-none;
    }

    h1 {
        @apply text-white font-bold text-3xl;
    }

    h2 {
        @apply text-gray-300;
    }
</style>
