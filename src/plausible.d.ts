import { EventOptions } from 'plausible-tracker/build/main/lib/request';
import type { PlausibleOptions } from 'plausible-tracker/build/main/lib/tracker';

export declare type TrackEvent = (
    eventName: string,
    options?: EventOptions,
    eventData?: PlausibleOptions
) => void;
export declare type TrackPageview = (eventData?: PlausibleOptions, options?: EventOptions) => void;
