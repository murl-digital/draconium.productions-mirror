<!--suppress JSVoidFunctionReturnValueUsed -->
<script lang='ts' context='module'>
    import type { LoadOutput } from '@sveltejs/kit';

    /** @type {import('@sveltejs/kit').Load} */
    export function load(): LoadOutput {
        const possibleTitles: string[] = [
            'Send your gluten free bread recipes',
            'Let\'s talk about eggs',
            'Send me your memes',
            'Put that in an email'
        ];

        return {
            props: {
                title: possibleTitles[Math.floor(Math.random() * possibleTitles.length)]
            }
        };
    }
</script>

<script lang='ts'>
    import { color, showLogo } from '$lib/components/navbar/navbarStores';
    import { trackEvent } from '$lib/plausible/plausible';
    import { onDestroy, onMount } from 'svelte';
    import { browser } from '$app/env';

    $showLogo = true;
    $color = '#000000';
    // fun experiment, but looks like ass
    /*$color =
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 69%, rgba(0,212,255,1) 100%)';*/

    let hcaptcha = {
        execute: async (_a, _b) => ({ response: '' }),
        render: (_a, _b) => {
        }
    };
    let hcaptchaWidgetID;
    const hcaptchaSitekey = '32baf58e-8737-4472-841d-72bf6f8b0c2b';

    export let title;

    onMount(() => {
        if (browser) {
            hcaptcha = window.hcaptcha;
            if (hcaptcha.render) {
                hcaptchaWidgetID = hcaptcha.render('hcaptcha', {
                    sitekey: hcaptchaSitekey,
                    size: 'invisible',
                    theme: 'dark'
                });
            }
        }
    });

    onDestroy(() => {
        if (browser) {
            hcaptcha = {
                execute: async () => ({ response: '' }),
                render: () => {
                }
            };
        }
    });

    let submitPromise;
    let sending = false;
    let email, subject, content;

    const submit = (e) => {
        trackEvent('Submit Contact Form');
        sending = true;
        submitPromise = send(e);
    };

    const send = async (e) => {
        const verify = await hcaptcha.execute(hcaptchaWidgetID, {
            async: true
        });

        const fieldData = {
            captcha: verify,
            email,
            subject,
            content
        };

        const res = await fetch('/contact/send', {
            method: 'post',
            body: JSON.stringify(fieldData)
        });
        email = '';
        subject = '';
        content = '';
        sending = false;
        return res;
    };
</script>

<svelte:head>
    <script src='https://js.hcaptcha.com/1/api.js?render=explicit' async defer></script>
</svelte:head>

<main>
    <div class='form-container'>
        <h1>{title}</h1>
        <form on:submit|preventDefault={submit}>
            <div class='field'>
                <label for='email'>Email</label>
                <input
                    class='input valid'
                    id='email'
                    type='email'
                    name='email'
                    bind:value={email}
                    required
                    disabled={sending}
                />
            </div>
            <div class='field'>
                <label for='subject'>Subject</label>
                <input
                    class='input valid'
                    id='subject'
                    type='text'
                    name='subject'
                    bind:value={subject}
                    required
                    disabled={sending}
                />
            </div>
            <div class='field'>
                <label for='content'>Content</label>
                <textarea
                    class='input'
                    id='content'
                    name='content'
                    bind:value={content}
                    required
                    disabled={sending}></textarea>
            </div>
            <div
                id='hcaptcha'
                class='h-captcha'
                data-sitekey={hcaptchaSitekey}
                data-size='invisible'
                data-theme='dark'></div>
            <button type='submit' disabled={sending}>
                {#if !submitPromise}
                    Send
                {:else}
                    {#await submitPromise}
                        <span class='text-white'>Waiting...</span>
                    {:then res}
                        <span class='text-white'>Sent!</span>
                        <span class='text-white'>{res.status}</span>
                    {:catch err}
                        <span class='text-white'>There was a problem: {err}</span>
                    {/await}
                {/if}
            </button>
        </form>
    </div>
    <div class='le-container'>
        <h1 class='alt-header'>Don't want to use the form?</h1>
        <h2>That's cool too, here's a mailto:</h2>
        <a href='mailto:contact@draconium.productions'>Mailto</a>
    </div>
</main>

<style>
    main {
        @apply bg-black h-screen flex flex-col md:flex-row items-center justify-center gap-5;
    }

    form {
        @apply text-white flex flex-col gap-5 items-center w-full;
    }

    button {
        @apply w-1/3 h-10 rounded-md bg-slate-600 hover:bg-gray-400 drop-shadow-md overflow-hidden flex justify-center items-center;

        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 11.5px );
        -webkit-backdrop-filter: blur( 11.5px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    .le-container {
        @apply flex flex-col items-center md:items-start h-1/4 md:h-1/2 w-full md:w-1/4;
    }

    .form-container {
        @apply flex flex-col items-center md:items-end h-1/2 md:h-1/2 w-full md:w-1/4;
    }

    .field {
        @apply flex flex-col w-full;
    }

    .input {
        @apply w-full bg-black rounded-md text-white;
    }

    .valid {
        @apply valid:text-green-500 invalid:text-red-500;
    }

    h1 {
        @apply text-white font-bold text-2xl w-2/3 text-center md:text-right;
    }

    h2 {
        @apply text-white;
    }

    .alt-header {
        @apply text-left;
    }
</style>
