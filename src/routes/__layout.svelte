<script lang='ts'>
    import '../app.postcss';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
    import { trackPageview } from '$lib/plausible/plausible?client';
    import { onMount } from 'svelte';

    onMount(() => {
        trackPageview();
    });
</script>

<Navbar />
<slot />
