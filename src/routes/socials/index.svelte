<script context='module' lang='ts'>
    import type { LoadInput, LoadOutput } from '@sveltejs/kit';

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
        const release = await fetch('/socials.json');

        const json = await release.json();

        if (release.status == 200)
            return {
                props: {
                    socials: json
                }
            };
    }
</script>

<script lang='ts'>
    import { showLogo } from '$lib/components/navbar/navbarStores';
    import type { SocialLink } from '$lib/sanity/schemas';

    export let socials: SocialLink[];

    $showLogo = true;
</script>

<div>
    <header>
        <h1>Here are all of my official social media accounts</h1>
        <h2>This page is intended to be the source of truth for all DRACONIUM social media
            accounts. If an account is not on this list, do <b>not</b> trust it.</h2>
    </header>
    <article>
        <ul>
            {#each socials as social}
                <li>
                    <span>{social.name} -
                        {#if social.isUrl}
                            <a href={social.link}>{social.link}</a>
                        {:else}
                            <p>{social.text}</p>
                        {/if}
                    </span>
                </li>
            {/each}
        </ul>
    </article>
</div>

<style>
    header {
        @apply w-full md:w-1/6 flex flex-col justify-center;
    }

    article {
        @apply flex justify-center items-center h-1/3;
    }

    div {
        @apply h-screen w-screen p-8 flex flex-col md:flex-row gap-7 justify-center items-center;
    }

    ul {
        @apply max-h-full w-fit overflow-y-auto flex flex-col gap-3;
    }

    h1 {
        @apply text-white font-bold text-2xl;
    }

    h2 {
        @apply text-white text-xl;
    }

    span {
        @apply text-white;
    }

    p {
        @apply select-all inline;
    }
</style>