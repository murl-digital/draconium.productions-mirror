<script lang='ts'>
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { cubicIn, cubicInOut, cubicOut } from 'svelte/easing';
    import { color, showLogo } from '$lib/components/navbar/navbarStores';

    import logo from '$lib/assets/svg/icon.svg';

    let navItems = [
        [
            { a: '/contact', t: 'contact' },
            { a: '/socials', t: 'socials' }
        ],
        [
            { a: '/thanks', t: 'thanks' },
            { a: '/discord', t: 'discord' }
        ]
    ];
    let flipDelay: number;
    let fadeDelay: number;
    let fadeEasing;

    $: {
        /*if ($showLogo) navItems = [...navItems, [{a: '/', t: 'logo'}]];
        else navItems = [...navItems.filter((i) => i[0].t !== 'logo')];*/
        if ($showLogo) navItems.splice(1, 0, [{ a: '/', t: 'logo' }]);
        else navItems = [...navItems.filter((i) => i[0].t !== 'logo')];

        flipDelay = $showLogo ? 0 : 150;
        fadeDelay = $showLogo ? 90 : 0;
        fadeEasing = $showLogo ? cubicIn : cubicOut;
    }
</script>

<nav style='--bg: {$color};'>
    <div
        class='nav-container'
        class:gap={$showLogo}
        class:gap-alt={!$showLogo}
        class:delay-150={!$showLogo}
    >
        {#each navItems as item, index (item)}
            <div
                transition:fade={{ delay: fadeDelay, easing: fadeEasing }}
                animate:flip={{ delay: flipDelay, duration: 400, easing: cubicInOut }}
                class='nav-item'
            >
                {#each item as link}
                    <a class={link.t === 'logo' ? 'logo-link' : 'link'} href={link.a}>
                        {#if link.t === 'logo'}
                            <img alt='yet another DRACONIUM logo' class='logo' src={logo} />
                        {:else}
                            {link.t}
                        {/if}
                    </a>
                {/each}
            </div>
        {/each}
    </div>
</nav>

<style>
    .link {
        @apply text-white mx-auto drop-shadow-md;
    }

    nav {
        @apply fixed w-screen top-0 left-0 z-20 flex justify-center transition-[background] ease-in-out duration-[250ms] h-16 overflow-hidden;

        background: var(--bg);
    }

    .nav-container {
        @apply w-full px-4 md:w-1/2 xl:w-1/3 h-full flex flex-row justify-center items-center transition transition-[gap] duration-700;
    }

    .nav-item {
        @apply h-full flex justify-center items-center gap-8 md:gap-10;
    }

    .gap {
        @apply gap-5;
    }

    .gap-alt {
        @apply gap-8 md:gap-10;
    }

    .logo {
        @apply w-12 drop-shadow-md;
    }

    .logo-link {
        @apply p-0 md:p-2;
    }
</style>
