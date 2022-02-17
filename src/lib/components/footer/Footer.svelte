<script>
    import logo from '$lib/assets/svg/icon.svg';
</script>

<footer>
    <div class='footer-container'>
        <div class='footer-items'>
            <div>
                <img class='logo' alt='DRACONIUM Logo' src={logo} />
            </div>
            <div>
                <p class='items-header'>Links</p>
                <ul>
                    <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                        <a href='/thanks'>Special Thanks</a>
                    </li>
                    <li class='mt-2 inline-block mr-2 md:block md:mr-0'>
                        <a href='/discord'>Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <p class='items-header'>Social</p>
                <ul>
                    <li>
                        <a href='https://soundcloud.com/iamdraconium'>SoundCloud</a>
                    </li>
                    <li>
                        <a href='https://twitter.com/iamdraconium'>Twitter</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <p>Powered by Svelte and Sanity CMS</p>
                    </li>
                    <li>
                        <p>
                            Yes, this site collects data for analytics. To best protect your
                            privacy, this site uses Plausible.
                        </p>
                    </li>
                    <li>
                        <p>
                            To find out exactly what data is collected and how it's used, <a
                            href='https://plausible.io/data-policy'>click this link</a
                        >.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<style>
    /* for accessibility reasons */
    img {
        @apply text-white;
    }

    footer {
        @apply bg-zinc-900;
    }

    .footer-container {
        @apply container mx-auto px-8;
    }

    .footer-items {
        @apply w-full flex flex-col md:flex-row py-6 gap-5;
    }

    .items-header {
        @apply uppercase text-gray-300 md:mb-6;
    }

    .footer-items div {
        @apply flex-1;
    }

    p {
        @apply text-gray-200;
    }

    ul {
        @apply mb-6;
    }

    li {
        @apply mt-2 inline-block mr-2 md:block md:mr-0;
    }

    .logo {
        @apply w-32;
    }
</style>
