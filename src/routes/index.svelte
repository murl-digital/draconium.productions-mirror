<script context='module' lang='ts'>
    import type { LoadInput, LoadOutput } from '@sveltejs/kit';

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
        const release = await fetch('/discography.json');

        if (release.status == 200)
            return {
                props: {
                    disc: await release.json()
                }
            };
    }
</script>

<script lang='ts'>
    import Logo from '$lib/components/logo/Logo.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';

    /*import banner from '$lib/assets/img/fullsize.jpg';
    import mascot from '$lib/assets/img/hello/mascot.png';
    import slice from '$lib/assets/img/hello/bg-slice.png';
    import shadingLeft from '$lib/assets/img/hello/shading-left.png';
    import shadingRight from '$lib/assets/img/hello/shading-right.png';*/

    import type { Release } from '$lib/sanity/schemas';
    import dayjs from 'dayjs';
    import PortableText from '@portabletext/svelte';
    import Link from '$lib/components/Link.svelte';

    import { showLogo, color } from '$lib/components/navbar/navbarStores';
    import { onMount, onDestroy } from 'svelte';

    showLogo.set(false);
    color.set('#00000000');

    export let disc: Release[];
    let controller;

    const metaDescription =
        'DRACONIUM is an electronic music producer who\'s been active since 2018.';

    onMount(async () => {
        const ScrollMagic = await import('scrollmagic');

        controller = new ScrollMagic.Controller(/*{addIndicators: true}*/);
        new ScrollMagic.Scene({
            triggerElement: '#hello'
        })
            .addTo(controller)
            .on('enter', () => {
                $showLogo = true;
                $color = '#000000';
            })
            .on('leave', () => {
                $color = '#00000080';
                $showLogo = false;
            });

        new ScrollMagic.Scene({
            triggerElement: '#logo'
        })
            .addTo(controller)
            .on('enter', () => {
                $color = '#00000080';
            })
            .on('leave', () => {
                $color = '#00000000';
            });
    });

    onDestroy(() => {
        if (controller) controller.destroy(true);
    });

    const flip = (event) => {
        $showLogo = !$showLogo;
    };
</script>

<svelte:head>
    <title>welcome | DRACONIUM</title>
    <!--eggs lmao-->
    <meta name='keywords' content='Draconium, music, eggs' />
    <meta name='description' content={metaDescription} />

    <!--<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>-->
</svelte:head>

<!--<header>
    <img class='splash' src={banner} alt='Splash screen' />
    <div on:click={flip} class='logo-container'>
        <Logo />
        <div id='logo'>&lt;!&ndash;marker for scrolling animation&ndash;&gt;</div>
    </div>
</header>-->
<!--<section id='hello' class='overflow-hidden h-screen relative'>
    <div class='hello-container'>
        <div class='hello-text-container'>
            <h1 class='header'>Hello and welcome to my page</h1>
            <p class='hello-text'>
                I'm an artist and music maker out of the midwestern US, and have been making music
                since 2018.
            </p>
        </div>
    </div>
    <div style={`background-image: url('${slice}');`} class='hello-bg'>
        <img src={shadingLeft} alt='BG Detail' class='hello-bg-detail' />
        <img class='mascot' src={mascot} alt='Mascot' />
        <img src={shadingRight} alt='BG Detail' class='hello-bg-detail' />
    </div>
</section>-->
<!--<section class='discography'>
    <div class='discography-container'>
        <div class='discography-header'>
            <h1>Hearing is believing</h1>
            <h2 class='sub-header'>
                ..That's a terrible way to introduce my discography, anyways take a look
            </h2>
        </div>
        <div class='discography-items-container'>
            <div class='discography-grid'>
                {#each disc as release}
                    <div class='release'>
                        <a href='/rls/{release.slug}' class='flex flex-col items-center'>
                            <img
                                src={release.artworkUrl}
                                alt='{release.displayName} album artwork'
                            />
                            <div class='release-title'>
                                <h1>{release.displayName}</h1>
                                <h2>
                                    {release.type} ∴ {dayjs(release.releaseDate).format(
                                    'MMM D, YYYY'
                                )}
                                </h2>
                            </div>
                        </a>
                        <div class='desc'>
                            <PortableText
                                blocks={release.description}
                                serializers={{
                                    marks: {
                                        link: Link
                                    }
                                }}
                            />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>-->
<Footer />

<style global>
    .desc {
        @apply text-white lg:text-center;
    }

    header {
        @apply h-screen flex justify-center items-center bg-cover;
    }

    section {
        @apply bg-black;
    }

    .splash {
        @apply absolute object-cover z-[-1] w-screen h-screen brightness-75;
    }

    .logo-container {
        @apply w-5/6 md:w-1/2;
    }

    .hello-container {
        @apply w-full absolute flex z-10;
    }

    .hello-text-container {
        @apply flex flex-col justify-center p-16 mt-0 md:mt-16;
    }

    .header {
        @apply text-white font-bold text-4xl;
    }

    .sub-header {
        @apply text-white text-2xl;
    }

    .hello-text {
        @apply text-white text-lg w-2/3;
    }

    .hello-bg {
        @apply bg-contain min-w-max h-full flex justify-between;
    }

    .hello-bg-detail {
        @apply max-h-full shrink-0;
    }

    .mascot {
        @apply max-h-full shrink-0;
    }

    .discography {
        @apply overflow-hidden h-screen;
    }

    .discography-container {
        @apply flex flex-col lg:flex-row-reverse max-h-full;
    }

    .discography-header {
        @apply mx-auto flex flex-col items-center justify-center p-8;
    }

    .discography-header h1 {
        @apply text-white text-7xl font-bold text-left mb-5;
    }

    .discography-header h2 {
        @apply text-left;
    }

    .discography-items-container {
        @apply overflow-auto w-full;
    }

    .discography-grid {
        @apply grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5 p-8;
    }

    .release {
        @apply flex flex-col overflow-y-auto mx-auto my-5 w-1/2;
    }

    .release-title {
        @apply my-2;
    }

    .release-title h1 {
        @apply text-white text-center font-bold text-lg;
    }

    .release-title h2 {
        @apply text-white text-center;
    }
</style>
