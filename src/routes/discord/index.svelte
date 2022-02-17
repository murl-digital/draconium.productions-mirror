<script lang='ts'>
    import type { DiscordLink } from '$lib/sanity/schemas';
    import { color, showLogo } from '$lib/components/navbar/navbarStores';

    let link: DiscordLink;

    async function getLink() {
        const req = await fetch(`/discord.json`);

        link = await req.json();

        window.open(link.link);

        $showLogo = true;
    }

    $color = '#000000';
</script>

<section>
    {#await getLink()}
        <h1>You should be redirected soon..</h1>
    {:then pog}
        <h1>Not working? Try clicking <a href={link.link}>here</a>.</h1>
    {/await}
</section>

<style>
    section {
        @apply h-screen bg-black flex items-center justify-center;
    }

    h1 {
        @apply font-bold text-white text-3xl;
    }
</style>
