<script lang='ts'>
    export let type: string;
</script>

<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    {#if type.toLowerCase() === 'youtube'}
        <path
            d='M14 8V8C14 6.11438 14 5.17157 13.4142 4.58579C13.4142 4.58579 13.4142 4.58579 13.4142 4.58579C12.8284 4 11.8856 4 10 4L6 4C4.11438 4 3.17157 4 2.58579 4.58579C2.58579 4.58579 2.58579 4.58579 2.58579 4.58579C2 5.17157 2 6.11438 2 8V8C2 9.88562 2 10.8284 2.58579 11.4142C2.58579 11.4142 2.58579 11.4142 2.58579 11.4142C3.17157 12 4.11438 12 6 12L10 12C11.8856 12 12.8284 12 13.4142 11.4142C13.4142 11.4142 13.4142 11.4142 13.4142 11.4142C14 10.8284 14 9.88562 14 8Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M7.5 9V7L9 8L7.5 9Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    {:else if type.toLowerCase() === 'youtubemusic'}
        <path
            d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M7.5 9V7L9 8L7.5 9Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    {:else if type.toLowerCase() === 'spotify'}
        <circle
            cx='8'
            cy='8'
            r='7'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M9.5 10.5L8.55574 10.0279C7.86145 9.68076 7.09588 9.50003 6.31965 9.50003L5.5 9.50004'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M11.5 7.50006L11.0338 7.26694C9.36749 6.4338 7.53012 6.00005 5.66716 6.00005L5 6.00005'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    {:else if type.toLowerCase() === 'soundcloud'}
        <path
            d='M9 11H12C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7V7C11.9008 7 11.8096 6.94123 11.7715 6.84963C11.3203 5.76365 10.2493 5 9 5'
            stroke-width='2'
            stroke-linecap='round'
        />
        <path
            d='M3 7C2.4022 7.39922 2 8.14539 2 9C2 9.85461 2.4022 10.6008 3 11'
            stroke-width='2'
            stroke-linecap='round'
        />
        <path d='M5.99316 11L6 6' stroke-width='2' stroke-linecap='round' />
        <path d='M9 11L9 5' stroke-width='2' stroke-linecap='round' />
    {:else if type.toLowerCase() === 'matter'}
        <rect x='3' y='11' width='2' height='2' rx='1' />
        <path
            d='M12 12V4L8 8L4 4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    {:else if type.toLowerCase() === 'audius'}
        <path
            d='M4.8258 12.9958H8H12.6164C13.3862 12.9958 13.8673 12.1624 13.4824 11.4958L8.86603 3.5C8.48113 2.83333 7.51888 2.83333 7.13398 3.5L4.8258 7.49789L3.23869 10.2468'
            stroke-width='2'
            stroke-linecap='round'
        />
    {:else if type.toLowerCase() === 'bandcamp'}
        <path
            d='M4.91708 5.16584L2.21708 10.5658C2.11735 10.7653 2.2624 11 2.48541 11L10.8146 11C10.9282 11 11.0321 10.9358 11.0829 10.8342L13.7829 5.43416C13.8827 5.23469 13.7376 5 13.5146 5L5.18541 5C5.07178 5 4.9679 5.0642 4.91708 5.16584Z'
            stroke-width='2'
            stroke-linecap='round'
        />
    {:else if type.toLowerCase() === 'applemusic'}
        <path
            d='M6 11.5V4L13 3V10.5'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M11.5 12C12.3284 12 13 11.3284 13 10.5C13 9.67157 12.3284 9 11.5 9C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12Z'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    {/if}
</svg>

<!--youtube
<svg stroke="#FF0000" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8V8C14 6.11438 14 5.17157 13.4142 4.58579C13.4142 4.58579 13.4142 4.58579 13.4142 4.58579C12.8284 4 11.8856 4 10 4L6 4C4.11438 4 3.17157 4 2.58579 4.58579C2.58579 4.58579 2.58579 4.58579 2.58579 4.58579C2 5.17157 2 6.11438 2 8V8C2 9.88562 2 10.8284 2.58579 11.4142C2.58579 11.4142 2.58579 11.4142 2.58579 11.4142C3.17157 12 4.11438 12 6 12L10 12C11.8856 12 12.8284 12 13.4142 11.4142C13.4142 11.4142 13.4142 11.4142 13.4142 11.4142C14 10.8284 14 9.88562 14 8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 9V7L9 8L7.5 9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
&lt;!&ndash;youtube music &ndash;&gt;
<svg stroke="#FF0000" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 9V7L9 8L7.5 9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
&lt;!&ndash;spotify&ndash;&gt;
<svg stroke="#1ED760" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.5 10.5L8.55574 10.0279C7.86145 9.68076 7.09588 9.50003 6.31965 9.50003L5.5 9.50004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.5 7.50006L11.0338 7.26694C9.36749 6.4338 7.53012 6.00005 5.66716 6.00005L5 6.00005" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
&lt;!&ndash;soundcloud&ndash;&gt;
<svg stroke="#FF5500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11H12C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7V7C11.9008 7 11.8096 6.94123 11.7715 6.84963C11.3203 5.76365 10.2493 5 9 5" stroke-width="2" stroke-linecap="round"/>
    <path d="M3 7C2.4022 7.39922 2 8.14539 2 9C2 9.85461 2.4022 10.6008 3 11" stroke-width="2" stroke-linecap="round"/>
    <path d="M5.99316 11L6 6" stroke-width="2" stroke-linecap="round"/>
    <path d="M9 11L9 5" stroke-width="2" stroke-linecap="round"/>
</svg>
&lt;!&ndash;matter&ndash;&gt;
<svg stroke="#8A6AFB" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="2" height="2" rx="1" />
    <path d="M12 12V4L8 8L4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
&lt;!&ndash;bandcamp&ndash;&gt;
<svg stroke="#1DA0C3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.91708 5.16584L2.21708 10.5658C2.11735 10.7653 2.2624 11 2.48541 11L10.8146 11C10.9282 11 11.0321 10.9358 11.0829 10.8342L13.7829 5.43416C13.8827 5.23469 13.7376 5 13.5146 5L5.18541 5C5.07178 5 4.9679 5.0642 4.91708 5.16584Z" stroke-width="2" stroke-linecap="round"/>
</svg>
&lt;!&ndash;audius&ndash;&gt;
<svg stroke="#CC0FE0"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.8258 12.9958H8H12.6164C13.3862 12.9958 13.8673 12.1624 13.4824 11.4958L8.86603 3.5C8.48113 2.83333 7.51888 2.83333 7.13398 3.5L4.8258 7.49789L3.23869 10.2468" stroke-width="2" stroke-linecap="round"/>
</svg>
&lt;!&ndash;apple music&ndash;&gt;
<svg stroke="#F94C57" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 11.5V4L13 3V10.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.5 12C12.3284 12 13 11.3284 13 10.5C13 9.67157 12.3284 9 11.5 9C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>-->
<style>
    svg {
        @apply inline-block mb-0.5;
    }
</style>
