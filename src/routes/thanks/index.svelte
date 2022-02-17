<script context='module' lang='ts'>
    import type { LoadInput, LoadOutput } from '@sveltejs/kit';

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
        const release = await fetch('/thanks.json');

        const json = await release.json();

        if (release.status == 200)
            return {
                props: {
                    artists: json.artists
                }
            };
    }
</script>

<script lang='ts'>
    import type { Artist } from '$lib/sanity/schemas';
    import Footer from '$lib/components/footer/Footer.svelte';
    import { color, showLogo } from '$lib/components/navbar/navbarStores';

    export let artists: Artist;
    const apology = 'This is a reminder that I didn\'t add captions to these';

    $showLogo = true;
    $color = '#000000';
</script>

<svelte:head>
    <title>thanks | DRACONIUM</title>
</svelte:head>

<article>
    <header>
        <h1>i couldn't have done this alone</h1>
        <h2>
            let's take a moment to thank everyone i've worked with that have made the DRACONIUM
            project possible
        </h2>
    </header>
    <article>
        <ul>
            {#each artists as artist}
                <li id={artist.name}>
                    <h1>{artist.name}</h1>
                    <div class='links'>
                        {#each artist.links as link}
                            <a href={link.link}>{link.title}</a>
                        {/each}
                    </div>
                    <div class='works'>
                        {#each artist.works as work}
                            <img class='work' src={work} alt={apology} />
                        {/each}
                    </div>
                </li>
            {/each}
        </ul>

        <span>expect more to come soon, this page is a work in progress!</span>
    </article>
</article>
<Footer />

<style>
    article {
        @apply bg-black p-8 min-h-screen;
    }

    header {
        @apply h-screen flex flex-col justify-center items-center;
    }

    h1 {
        @apply font-bold text-white text-3xl;
    }

    h2 {
        @apply text-white text-2xl w-1/2 text-center;
    }

    span {
        @apply text-white text-center;
    }

    .links {
        @apply flex gap-3;
    }

    .works {
        @apply grid grid-cols-3 grid-rows-2 text-white;
    }

    .work {
        @apply object-cover;
    }
</style>
