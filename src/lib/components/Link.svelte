<script lang='ts'>
    import type { MarkProps } from '@portabletext/svelte';

    // Property custom marks receive from @portabletext/svelte when rendered
    export let portableText: MarkProps<{
        href?: string;
        blank?: boolean;
    }>;

    // Remember to make your variables reactive so that they can reflect prop changes
    // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
    $: mark = portableText.mark;
    $: blank = mark.blank || false;
</script>

{#if mark.href}
    <a href={mark.href} target={blank ? '_blank' : undefined} rel='noreferrer'>
        <slot />
    </a>
{:else}
    <slot />
{/if}
