/* eslint-disable @typescript-eslint/no-unused-vars */
import Plausible from 'plausible-tracker';
import { browser } from '$app/env';
import type { TrackEvent, TrackPageview } from 'src/plausible';
import type { EventOptions } from 'plausible-tracker/build/main/lib/request';
import type { PlausibleOptions } from 'plausible-tracker/build/main/lib/tracker';

// this is awful. this is terrible. why do you make me do this.
// i want to throw myself into the sea
let page: TrackPageview, event: TrackEvent;
if (browser) {
    const { trackPageview, trackEvent } = Plausible({
        domain: 'draconium.productions'
    });
    page = trackPageview;
    event = trackEvent;
} else {
    page = (eventData?: PlausibleOptions, options?: EventOptions): void => {
        return;
    };
    event = (eventName: string, options?: EventOptions, eventData?: PlausibleOptions): void => {
        return;
    };
}

export { page as trackPageview, event as trackEvent };
