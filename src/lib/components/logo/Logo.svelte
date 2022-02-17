<script lang='ts'>
    import logo from '$lib/assets/svg/logo.svg';
    import { crossfade, draw, fade } from 'svelte/transition';
    import { sineIn, sineInOut } from 'svelte/easing';
    import anime from 'animejs';

    import {
        border,
        CO,
        D,
        dragonHead,
        dragonHeadDetail,
        M,
        N,
        RA,
        U,
        underlineLeftDetail,
        underlineLeftRect1,
        underlineLeftRect2,
        underlineLeftRect3,
        underlineRightDetail,
        underlineRightRect1,
        underlineRightRect2,
        underlineRightRect3
    } from '$lib/components/logo/logo-paths';
    import { onMount } from 'svelte';

    const configs = {
        border: { duration: 2500, easing: sineIn },
        letter_d: { duration: 1000, easing: sineInOut },
        letter_ra: { delay: 75, duration: 1000, easing: sineInOut },
        letter_co: { delay: 150, duration: 1000, easing: sineInOut },
        letter_n: { delay: 225, duration: 1000, easing: sineInOut },
        letter_i: { delay: 300, duration: 1000, easing: sineInOut },
        letter_u: { delay: 375, duration: 1000, easing: sineInOut },
        letter_m: { delay: 450, duration: 1000, easing: sineInOut },
        dragon_head: { delay: 1500, duration: 1000, easing: sineInOut },
        underline_connector: { delay: 1800, duration: 500, easing: sineInOut },
        underline_detail_1: { delay: 800, duration: 1000, easing: sineInOut },
        underline_detail_2: { delay: 880, duration: 1000, easing: sineInOut },
        underline_detail_3: { delay: 1090, duration: 1000, easing: sineInOut },
        underline_detail_4: { delay: 1090, duration: 1000, easing: sineInOut },
        underline_detail_5: { delay: 1000, duration: 1000, easing: sineInOut },
        fade: { delay: 2800, duration: 1000, easing: sineIn }
    };

    const [send, receive] = crossfade({
        duration: 1000,
        easing: sineInOut,
        fallback: fade
    });

    let underlineLeftMaskRect1,
        underlineLeftMaskRect2,
        underlineLeftMaskRect3,
        underlineRightMaskRect1,
        underlineRightMaskRect2,
        underlineRightMaskRect3,
        underlineLeftMask,
        underlineRightMask;

    let control = { switch: true, mounted: false };

    onMount(setup);

    function setup() {
        control.mounted = true;

        let timeline = anime
            .timeline({
                easing: 'easeInOutCubic',
                duration: 750
            })
            .add(
                {
                    targets: underlineLeftMaskRect1,
                    translateY: -18.5
                },
                0
            )
            .add(
                {
                    targets: underlineLeftMaskRect2,
                    translateY: -23
                },
                125
            )
            .add(
                {
                    targets: underlineLeftMaskRect3,
                    translateY: -22.5
                },
                250
            )
            .add(
                {
                    targets: underlineLeftMask,
                    duration: 2000,
                    scaleX: ['45%', '100%']
                },
                250
            )
            .add(
                {
                    targets: underlineRightMaskRect3,
                    translateY: -18.5
                },
                0
            )
            .add(
                {
                    targets: underlineRightMaskRect2,
                    translateY: -18
                },
                125
            )
            .add(
                {
                    targets: underlineRightMaskRect1,
                    translateY: -18.5
                },
                250
            )
            .add(
                {
                    targets: underlineRightMask,
                    duration: 2000,
                    scaleX: ['216%', '100%']
                },
                250
            );

        setTimeout(() => {
            control.switch = false;
        }, 3000);
    }
</script>

<svg
    style="height: {control.mounted ? '100%' : '0px'}"
    height='100%'
    version='1.1'
    viewBox='0 0 800 145'
    width='100%'
    xml:space='preserve'
    xmlns='http://www.w3.org/2000/svg'
>
    <defs>
        <mask id='underline_left_mask_1'>
            <g transform='matrix(1.6875,0,0,1.51429,-47.2924,-74.8464)'>
                <rect
                    bind:this={underlineLeftMaskRect1}
                    class='mask'
                    height='18.394'
                    width='33.635'
                    x='74.522'
                    y='132.5'
                />
            </g>
        </mask>
        <mask id='underline_left_mask_2'>
            <g transform='matrix(1,0,0,0.977273,0,4.65997)'>
                <rect
                    bind:this={underlineLeftMaskRect2}
                    class='mask'
                    height='23.124'
                    width='45.986'
                    x='109.997'
                    y='124'
                />
            </g>
        </mask>
        <mask id='underline_left_mask_3'>
            <g transform='matrix(1,0,0,0.97619,0,4.76925)'>
                <rect
                    bind:this={underlineLeftMaskRect3}
                    class='mask'
                    height='22.073'
                    width='39.153'
                    x='133.647'
                    y='124'
                />
            </g>
        </mask>
        <mask id='underline_right_mask_3'>
            <g transform='matrix(1.66875,0,0,1.22857,544.439,-36.9433)'>
                <rect
                    bind:this={underlineRightMaskRect3}
                    class='mask'
                    height='18.394'
                    width='33.635'
                    x='74.522'
                    y='132.5'
                />
            </g>
        </mask>
        <mask id='underline_right_mask_2'>
            <g transform='matrix(1.36875,0,0,1.22857,542.62,-36.7331)'>
                <rect
                    bind:this={underlineRightMaskRect2}
                    class='mask'
                    height='18.394'
                    width='33.635'
                    x='74.522'
                    y='132.5'
                />
            </g>
        </mask>
        <mask id='underline_right_mask_1'>
            <g transform='matrix(1.36875,0,0,1.22857,520.127,-36.7331)'>
                <rect
                    bind:this={underlineRightMaskRect1}
                    class='mask'
                    height='18.394'
                    width='33.635'
                    x='74.522'
                    y='132.5'
                />
            </g>
        </mask>
        <mask id='underline_left_mask'>
            <g transform='matrix(1.34634,0,0,1.72603,-53.915,-90.525)'>
                <rect
                    bind:this={underlineLeftMask}
                    class='mask'
                    height='15.346'
                    width='177.846'
                    x='151.424'
                    y='111.945'
                />
            </g>
        </mask>
        <mask id='underline_right_mask'>
            <g transform='matrix(1.34634,0,0,1.72603,208.085,-90.525)'>
                <rect
                    bind:this={underlineRightMask}
                    class='mask'
                    height='15.346'
                    width='177.846'
                    x='151.424'
                    y='111.945'
                />
            </g>
        </mask>
    </defs>

    {#if control.mounted}
        {#if control.switch}
            <g class='stroke' out:send={{ key: 'poggers' }}>
                <g class='letters'>
                    <path d={D} id='d' in:draw={configs.letter_d} />
                    <path d={RA} id='ra' in:draw={configs.letter_ra} />
                    <path d={CO} id='co' in:draw={configs.letter_co} />
                    <path d={N} id='n' in:draw={configs.letter_n} />
                    <rect
                        height='73.31'
                        id='i'
                        in:draw={configs.letter_i}
                        width='16.29'
                        x='536.9'
                        y='13.03'
                    />
                    <path d={U} id='u' in:draw={configs.letter_u} />
                    <path d={M} id='m' in:draw={configs.letter_m} />
                </g>
                <path class='border' d={border} id='border' in:draw={configs.border} />
                <g class='underline'>
                    <path
                        d={underlineLeftDetail}
                        id='underline_left_detail'
                        in:draw={configs.underline_detail_5}
                    />
                    <path
                        d={underlineRightDetail}
                        id='underline_right_detail'
                        in:draw={configs.underline_detail_5}
                    />
                    <path
                        d={underlineLeftRect3}
                        id='underline_left_rect_3'
                        style='mask: url(#underline_left_mask_3)'
                    />
                    <path
                        d={underlineLeftRect2}
                        id='underline_left_rect_2'
                        style='mask: url(#underline_left_mask_2)'
                    />
                    <path
                        d={underlineLeftRect1}
                        id='underline_left_rect_1'
                        style='mask: url(#underline_left_mask_1)'
                    />
                    <path
                        d={underlineRightRect3}
                        id='underline_right_rect_3'
                        style='mask: url(#underline_right_mask_3)'
                    />
                    <path
                        d={underlineRightRect2}
                        id='underline_right_rect_2'
                        style='mask: url(#underline_right_mask_2)'
                    />
                    <path
                        d={underlineRightRect1}
                        id='underline_right_rect_1'
                        style='mask: url(#underline_right_mask_1)'
                    />
                    <g id='underline_right'>
                        <path
                            d='M696.92,124.9L707.61,132.9L647.19,132.9L647.16,133.71L633.06,133.71L633.06,132.9L631,132.9L620.82,122.72L581,122.72L578.52,120.24L573.84,120.2L579.58,125.94L619.41,125.94L629.59,136.12L633,136.12L633,135.31L647.14,135.31L647.14,136.12L717.33,136.12L713.42,133.19L702.31,124.86L696.92,124.9Z'
                            id='underline_right_detail_4'
                            style='fill-rule:nonzero;'
                            in:draw={configs.underline_detail_4}
                        />
                        <path
                            d='M544.1,120.24L553.77,129.94L498.38,129.94L490.81,122.37L468.71,122.37C467.679,117.465 462.36,114.788 457.806,116.88C453.252,118.973 451.82,124.753 454.87,128.73L451.63,132L451.05,131.42L446.14,136.33L430.61,136.33L430.61,137.14L406.783,137.14L405.917,138.76L430.58,138.76L430.58,139.57L447.47,139.57L453.34,133.7L452.76,133.12L455.97,129.91C460.462,133.779 467.458,131.42 468.69,125.62L489.43,125.62L497,133.2L561.64,133.2L548.64,120.2L544.1,120.24Z'
                            id='underline_right_detail_3'
                            style='fill-rule:nonzero;'
                            in:draw={configs.underline_detail_3}
                        />
                        <path
                            d='M643.78,126.59C643.78,129.913 639.762,131.577 637.413,129.227C635.063,126.878 636.727,122.86 640.05,122.86C642.108,122.865 643.775,124.532 643.78,126.59ZM630.11,120.24L635.33,124.09C634.91,124.857 634.687,125.716 634.68,126.59C634.66,131.979 641.719,134.013 644.57,129.44L703,129.44L700.851,127.82L645.25,127.82C646.304,123.425 641.744,119.801 637.7,121.82L635.6,120.263L630.11,120.24Z'
                            id='underline_right_detail_2'
                            in:draw={configs.underline_detail_2}
                        />
                        <path
                            d='M626.76,113.72L616.24,106L510.63,106L518.38,113.75L523,113.72L518.5,109.23L615.17,109.23L621.27,113.72L626.76,113.72Z'
                            id='underline_right_detail_1'
                            in:draw={configs.underline_detail_1}
                        />
                        <path
                            d='M442.44,113.96L437.8,109.32L422.93,109.32L415.85,113L414.083,115.81L421.57,111.86L424.7,115L432.7,115L437.04,119.34L439.29,117.08L434,111.76L426,111.76L425.15,110.91L437.07,110.91L441.29,115.08L442.44,113.96Z'
                            id='underline_right_connector'
                            in:draw={configs.underline_connector}
                        />
                        <path
                            d='M452.13,104.27L434.64,121.74L431.52,121.74L431.52,124.18L412.405,124.18L411.953,125.84L431.46,125.84L431.46,128.28L437.28,128.28L454.8,110.76L494,110.76L503.48,120.24L649.68,120.27L641,113.72L506.14,113.75L496.66,104.27L452.13,104.27Z'
                            id='underline_right_main'
                            style='mask: url(#underline_right_mask)'
                        />
                    </g>
                    <g id='underline_left'>
                        <path
                            d='M92.38,132.9L103.04,124.9L97.62,124.89L86.51,133.22L82.6,136.15L152.8,136.15L152.8,135.34L166.94,135.34L166.94,136.15L170.35,136.15L180.53,125.97L220.36,125.97L226.1,120.23L221.5,120.24L218.99,122.72L179.17,122.72L168.99,132.9L166.93,132.9L166.93,133.71L152.8,133.71L152.8,132.9L92.38,132.9Z'
                            id='underline_left_detail_4'
                            style='fill-rule:nonzero;'
                            in:draw={configs.underline_detail_4}
                        />
                        <path
                            d='M251.3,120.23L238.3,133.23L303,133.23L310.57,125.66L331.31,125.66C332.57,131.42 339.519,133.753 344,129.92L352.84,138.76L359.67,138.76L359.67,139.57L375,139.57L375,138.76L394.073,138.76L393.297,137.13L375,137.13L374.99,136.31L359.68,136.31L359.68,137.12L353.52,137.12L345.12,128.72C348.133,124.745 346.693,119.003 342.161,116.921C337.629,114.838 332.334,117.485 331.28,122.36L309.19,122.36L301.62,129.93L246.19,129.93L255.9,120.22L251.3,120.23Z'
                            id='underline_left_detail_3'
                            style='fill-rule:nonzero;'
                            in:draw={configs.underline_detail_3}
                        />
                        <path
                            d='M159.94,122.86C163.263,122.86 164.927,126.878 162.577,129.227C160.228,131.577 156.21,129.913 156.21,126.59C156.216,124.528 157.888,122.86 159.95,122.86L159.94,122.86ZM97,129.44L155.44,129.44C158.291,134.013 165.35,131.979 165.33,126.59C165.323,125.716 165.1,124.857 164.68,124.09L169.9,120.24L164.37,120.24L162.27,121.79C161.543,121.426 160.743,121.235 159.93,121.23C156.46,121.201 153.891,124.45 154.72,127.82L99.15,127.82L97,129.44Z'
                            id='underline_left_detail_2'
                            style='fill-rule:nonzero;'
                            in:draw={configs.underline_detail_2}
                        />
                        <path
                            d='M281.6,113.72L289.35,105.97L183.75,105.97L173.23,113.72L178.73,113.72L184.82,109.23L281.49,109.23L277,113.72L281.6,113.72Z'
                            id='underline_left_detail_1'
                            style='fill-rule:nonzero;'
                            in:draw={configs.underline_detail_1}
                        />
                        <path
                            d='M362.989,119.36L367.33,115.02L375.33,115.02L378.49,111.86L385.96,115.86L384.14,113.02L377.07,109.28L362.2,109.28L357.55,113.93L358.6,115.05L362.82,110.91L374.74,110.91L373.89,111.76L365.89,111.76L360.6,117.05L362.989,119.36Z'
                            id='underline_left_connector'
                            in:draw={configs.underline_connector}
                        />
                        <path
                            d='M150.29,120.24L296.56,120.22L306.04,110.74L345.17,110.74L362.69,128.26L368.51,128.26L368.51,125.82L387.817,125.82L387.347,124.2L368.51,124.2L368.51,121.76L365.39,121.76L347.86,104.24L303.33,104.24L293.85,113.72L159,113.72L150.29,120.24Z'
                            id='underline_left_main'
                            style='mask: url(#underline_left_mask)'
                        />
                    </g>
                </g>
                <path d={dragonHeadDetail} id='dragon_head_detail' in:draw={configs.dragon_head} />
                <path d={dragonHead} id='dragon_head' in:draw={configs.dragon_head} />
            </g>
        {:else}
            <g in:receive={{ key: 'poggers' }} class='fill'>
                <path
                    d='M137.78,13H43.18A29.31,29.31,0,0,1,56.33,37.47v81.45l81.45-61.09ZM121.49,49.69,72.62,86.34v-57h48.87Z'
                />
                <path
                    d='M447.3,13h-57a24.44,24.44,0,0,0-24.44,24.44V61.9h29.42A29.31,29.31,0,0,1,382.14,38v-.56a8.15,8.15,0,0,1,8.15-8.15h8.15c18,0,32.58,2.36,32.58,32.58A8.15,8.15,0,0,1,422.86,70H317a8.15,8.15,0,0,1-8.15-8.15V29.32h50a29.42,29.42,0,0,1,12-16.29H292.54V61.9A24.44,24.44,0,0,0,317,86.34H422.86A24.44,24.44,0,0,0,447.3,61.9Z'
                />
                <rect height='73.31' width='16.29' x='536.9' y='13.03' />
                <path
                    d='M284.4,61.91V13H256.59l-57,57H186.66V61.9h11.52l21.06-21.06V13H145.93V58L110.49,86.34h26.08l25.65-20.52V29.32h40.73v4.77L191.43,45.61H170.36V86.34h36l57-57h4.77v57h29.44A29.31,29.31,0,0,1,284.4,61.91Z'
                />
                <path
                    d='M690.72,40.73,656.54,13H637.78V86.34h29.44A29.31,29.31,0,0,1,654.07,62V31L690.72,61.9,727.38,31V91.44s-5.86-6.42-23.32-11.6c-18.19-5.41-33.69,6.5-33.69,6.5s17.59-3.46,32,4.06a137.25,137.25,0,0,1,25,16.3l16.29,12.22V37.47A29.31,29.31,0,0,1,756.82,13H724.91Z'
                />
                <path
                    d='M512.46,13V40.08L483.06,13H455.45V61.91h0A29.31,29.31,0,0,1,442.3,86.34h29.44v-57h5l35.76,32.9V86.34h16.29V13Z'
                />
                <path
                    d='M720.29,0,690.72,24,661.15,0H600.31V57h-9.66V0H499.43V10.39L488.14,0h-237L232.27,18.92V0H0L36,23.89A16.29,16.29,0,0,1,43.3,37.47V145l60.82-45.61h37l16.19-13v13h54.39L255.07,56V99.37H484.77V54.45l14.66,13.49V99.37H688.72a28.77,28.77,0,0,1,7.67,2.59,128.39,128.39,0,0,1,22.4,14.55L756.7,145V37.47A16.29,16.29,0,0,1,764,23.89L800,0Zm40.13,18.46a22.79,22.79,0,0,0-10.24,19V132l-26.92-20.19-.2-.17A132,132,0,0,0,699.4,96.18a35.47,35.47,0,0,0-9.75-3.27l-.3-.06H505.95V65.08L478.25,39.6V92.85H261.59V40.28L209,92.85H163.85v-20l-25,20H101.95L49.82,132V37.47a22.79,22.79,0,0,0-10.24-19l-18-11.94H225.75V34.65L253.89,6.52H485.6l20.35,18.72V6.52h78.19v57h22.69v-57h52l31.88,25.82L722.6,6.52h55.8Z'
                />
                <polygon
                    points='613.34 70.05 577.62 70.05 577.62 13.03 561.33 13.03 561.33 86.34 629.63 86.34 629.63 13.03 613.34 13.03 613.34 70.05'
                />
                <polygon
                    points='154.66 104.06 138.09 104.06 110.3 124.89 126.88 124.89 154.66 104.06'
                />
                <polygon
                    points='208.11 131 202.52 131 199.07 127.55 195.62 131 190.03 131 186.58 127.55 182.32 131.81 186.58 136.08 190.03 132.63 195.62 132.63 199.07 136.08 202.52 132.63 208.11 132.63 211.56 136.08 215.82 131.81 211.56 127.55 208.11 131'
                />
                <polygon
                    points='689.69 124.89 661.91 104.06 645.34 104.06 673.12 124.89 689.69 124.89'
                />
                <path
                    d='M692.23,104.06H669.14l27.78,20.84h0l3.89,2.92H645.25a5.32,5.32,0,0,0-7.55-6l-2.1-1.55h14.08l6.21,4.65h10.86L639,104.06H628.1L641,113.72H626.76L616.24,106H510.63l7.75,7.75H506.14l-9.48-9.48H452.13l-9.69,9.69-4.64-4.64H422.93L415.88,113l1.13-1.77,3.11-11.55-6.87,9.35-4.58,1.76-1.36-2.88.41-3.76L400,110.88l-7.73-6.71.41,3.76-1.36,2.88-4.58-1.76-6.87-9.35L383,111.25l1.14,1.77-7.07-3.74H362.2l-4.65,4.65-9.69-9.69H303.33l-9.48,9.48H281.6l7.75-7.75H183.75l-10.52,7.75H159l12.89-9.67H161l-27.78,20.84h10.86l6.21-4.65h14.08l-2.1,1.55a5.3,5.3,0,0,0-2.34-.56,5.32,5.32,0,0,0-5.21,6.59H99.15l3.89-2.92h0l27.78-20.84H107.76L80,124.89H97.62l-11.11,8.33-3.91,2.93h70.2v-.81h14.14v.81h3.41l.48-.48,9.7-9.7h39.83l.48-.48,5.26-5.26h25.2l-13,13H303l7.57-7.57h20.74A7.8,7.8,0,0,0,344,129.92l8.6,8.6.24.24h6.83v.81H375v-.81h19l1.17,2.19,0-2.15,2.13,2.15h5.38l2.13-2.15,0,2.15,1.17-2.19h24.6v.81h16.89l.48-.48,5.39-5.39-.58-.58,3.21-3.21a7.8,7.8,0,0,0,12.72-4.29h20.74L497,133.2h64.64l-13-13h25.2l5.26,5.26.48.48h39.83l9.7,9.7.48.48h3.41v-.81h14.14v.81h70.19l-3.91-2.93-11.11-8.33H720Zm-48.45,22.53a3.73,3.73,0,1,1-3.73-3.73A3.74,3.74,0,0,1,643.78,126.59ZM518.5,109.23h96.67l6.1,4.49H523Zm-77.21,5.85-2,2L434,111.76h-8l-.85-.85h11.92Zm-38,9.34,9.69-6.86,1.13-1.75,7.46-3.95L424.7,115h8l4.34,4.34-2.4,2.4h-3.12v2.44H412.73l1.2-4.2-10.66,6.43ZM387,117.56l9.69,6.86v2L386.07,120l1.2,4.2H368.51v-2.44h-3.12l-2.4-2.4,4.34-4.34h8l3.16-3.16,7.47,4Zm-24.18-6.65h11.92l-.85.85h-8l-5.29,5.29-2-2Zm-178-1.68h96.67L277,113.72H178.73Zm-24.88,13.63a3.73,3.73,0,1,1-3.73,3.73A3.74,3.74,0,0,1,159.95,122.86Zm59.05-.14H179.17l-.48.48-9.7,9.7h-2.06v.81H152.8v-.81H92.38L97,129.44h58.44a5.35,5.35,0,0,0,9.89-2.85,5.29,5.29,0,0,0-.65-2.5l5.22-3.85h51.6Zm156,13.59H359.68v.81h-6.16l-8.4-8.4a7.8,7.8,0,1,0-13.84-6.36H309.19l-7.57,7.57H246.19l9.71-9.71h40.66l9.48-9.48h39.13l17.52,17.52h5.82v-2.44h19.23l.24.82,5,4.54,2.21,5.49L393,134.84l-.43-3.1-.59,3.1,1.19,2.29H375Zm178.78-6.37H498.38l-7.57-7.57H468.71a7.81,7.81,0,1,0-13.84,6.36L451.63,132l-.58-.58-4.91,4.91H430.61v.81H406.87l1.19-2.29-.59-3.1-.43,3.1-2.23,1.86L407,131.2l5-4.54.24-.82h19.22v2.44h5.82l17.52-17.52H494l9.48,9.48H544.1Zm93.39,3.77H633.06v-.81H631l-9.7-9.7-.48-.48H581l-2.48-2.48h51.59l5.22,3.85a5.29,5.29,0,0,0-.65,2.5,5.35,5.35,0,0,0,9.89,2.85H703l4.61,3.46H647.19Z'
                />
                <polygon
                    points='609.96 131 604.37 131 600.92 127.55 597.47 131 591.88 131 588.43 127.55 584.17 131.81 588.43 136.08 591.88 132.63 597.47 132.63 600.92 136.08 604.37 132.63 609.96 132.63 613.41 136.08 617.67 131.81 613.41 127.55 609.96 131'
                />
                <polygon
                    points='403.11 142.55 402.19 141.63 400 141.63 397.81 141.63 396.89 142.55 396.89 141.6 395.88 140.59 395.88 142.28 396.89 143.86 400 143.86 403.11 143.86 404.12 142.28 404.12 140.59 403.11 141.6 403.11 142.55'
                />
            </g>
        {/if}
    {/if}
</svg>
<noscript>
    <img alt='DRACONIUM logo' src={logo} />
</noscript>

<style>
    .stroke {
        fill: none;
        stroke: white;
    }

    .letters {
        stroke-width: 1;
    }

    .border {
        stroke-width: 1;
    }

    .underline {
        stroke-width: 1;
    }

    .fill {
        fill: white;
    }

    .mask {
        fill: white;
    }
</style>
