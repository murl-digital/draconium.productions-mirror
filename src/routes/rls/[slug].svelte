<!--suppress CssUnresolvedCustomProperty -->
<script context='module' lang='ts'>
    import type { LoadInput, LoadOutput } from '@sveltejs/kit';

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ params, fetch }: LoadInput): Promise<LoadOutput> {
        const release = await fetch(`/rls/${params.slug}.json`);

        if (release.status == 200)
            return {
                props: {
                    data: await release.json()
                }
            };

        return {
            status: release.status
        };
    }
</script>

<script lang='ts'>
    import type { Release } from '$lib/sanity/schemas';
    import dayjs from 'dayjs';
    import JsBarcode from 'jsbarcode';
    import { onMount } from 'svelte';
    import { showLogo, color } from '$lib/components/navbar/navbarStores';

    import LinkIcon from '$lib/components/rls/LinkIcon.svelte';

    export let data: Release;
    const releaseDate = dayjs(data.releaseDate).format('MMM D, YYYY');
    const releaseMeta = `${data.type} ∴ ${releaseDate}`;
    let barcode;
    let background;
    let darkLinkText = pickTextColorBasedOnBgColorSimple(data.primaryColor, '#FFFFFF', '#000000');
    let darkText = false;

    $showLogo = true;
    $color = `${data.primaryColor}20`;

    onMount(() => {
        const { r, g, b } = getAverageRGB(background);
        darkText = pickTextColorBasedOnBgColorSimple(rgbToHex(r, g, b), '#FFFFFF', '#000000');

        JsBarcode(barcode, data.isrc, {
            textMargin: 0,
            background: '#00000000',
            lineColor: darkText ? '#000000' : '#FFFFFF'
        });
    });

    // thanks again stackoverflow!
    // https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
    function getAverageRGB(imgEl) {
        let blockSize = 5, // only visit every 5 pixels
            defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data,
            width,
            height,
            i = -4,
            length,
            rgb = { r: 0, g: 0, b: 0 },
            count = 0;

        if (!context) {
            return defaultRGB;
        }

        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

        context.drawImage(imgEl, 0, 0);

        try {
            data = context.getImageData(0, 0, width, height);
        } catch (e) {
            /* security error, img on diff domain */
            return defaultRGB;
        }

        length = data.data.length;

        while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        return rgb;
    }

    // thanks stackoverflow!
    // https://stackoverflow.com/a/41491220/12962191
    function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
        const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
        const r = parseInt(color.substring(0, 2), 16); // hexToR
        const g = parseInt(color.substring(2, 4), 16); // hexToG
        const b = parseInt(color.substring(4, 6), 16); // hexToB
        return r * 0.299 + g * 0.587 + b * 0.114 > 186;
    }

    function rgbToHex(r, g, b) {
        return (
            '#' +
            [r, g, b]
                .map((x) => {
                    const hex = x.toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                })
                .join('')
        );
    }
</script>

<svelte:head>
    <title>{data.displayName} | DRACONIUM</title>
    <meta property='og:title' content={data.displayName} />
    <meta property='og:description' content={releaseMeta} />
    <meta property='og:url' content='https://draconium.productions/rls/{data.slug}' />
    <meta property='og:image' content={data.artworkUrl} />
    <meta property='theme-color' content={data.primaryColor} />
</svelte:head>

<div
    class='main'
    style='--primary: {data.primaryColor}; --primary-glass: {`${data.primaryColor}60`}; --secondary: {data.secondaryColor}'
>
    <img bind:this={background} alt='Background' src={data.backgroundUrl} class='background' />
    <article class='card'>
        <img alt='Album artwork' src={data.artworkUrl} class='artwork' />
        <h1 class:white={!darkText}>{data.displayName}</h1>
        <h2 class:white={!darkText}>{releaseMeta}</h2>
        <div class='links-container'>
            {#if data.links}
                {#each data.links as link}
                    {#if !link.presave}
                        <a
                            href={link.link}
                            class:link-white-hover={!darkLinkText}
                            class:wide-boi={data.links.length <= 1}
                            class='link'
                        >
                            <span class='link-title'>
                                {#if link.type}
                                    <LinkIcon class='icon' type={link.type} />
                                {/if}
                                {link.title}
                            </span>
                            <div class='link-bg' />
                        </a>
                    {/if}
                {/each}
            {/if}
        </div>
        <svg bind:this={barcode} class='barcode' />
        <p>Icons courtesy of Emplexx</p>
    </article>
</div>

<style>
    h1 {
        @apply font-bold text-xl text-center pointer-events-none;
    }

    h2 {
        @apply pointer-events-none;
    }

    p {
        @apply text-white;
    }

    .background {
        @apply absolute z-[-10] w-screen h-screen object-cover;
    }

    .main {
        @apply h-screen w-screen flex justify-center items-center bg-cover overflow-hidden;
    }

    .card {
        @apply h-screen md:h-fit w-screen md:w-fit flex flex-col items-center drop-shadow-lg pt-24 md:pt-8 p-8 rounded-none md:rounded-md;

        background: var(--primary-glass);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(7px);
        border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .wide-boi {
        @apply col-span-2;
    }

    .artwork {
        @apply w-1/2 mb-8;
    }

    .links-container {
        @apply w-full grid grid-cols-2 gap-5 my-8;
    }

    .white {
        @apply text-white;
    }

    .link {
        @apply h-12 grow-0 md:grow rounded-md drop-shadow-md overflow-hidden flex justify-center items-center relative text-black stroke-black;

        background: rgba(255, 255, 255, 0.65);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(13px);
        -webkit-backdrop-filter: blur(13px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .link-white-hover {
        @apply hover:text-white hover:stroke-white;
    }

    .link-title {
        @apply pointer-events-none absolute z-10;
    }

    .link-bg {
        @apply opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 w-full h-full;

        background: linear-gradient(to right, var(--primary), var(--secondary));
    }

    .barcode {
        @apply h-16 opacity-70 pointer-events-none;
    }
</style>
