export interface Release {
    slug: string;
    displayName: string;
    type: string;
    description: string;
    isrc: string;
    goLiveDate: string;
    artworkUrl: string;
    backgroundUrl: string;
    primaryColor: string;
    secondaryColor: string;
    links: ReleaseLink[];
    releaseDate: string;
}

export interface ReleaseLink {
    link: string;
    presave: string;
    title: string;
    type: string;
}

export interface DiscordLink {
    enabled: boolean;
    link: string;
}

export interface SocialLink {
    name: string;
    isUrl: boolean;
    link?: string;
    text?: string;
}

export interface Artist {
    name: string;
    category: string;
    links: ArtistLink[];
    works: string[];
}

export interface ArtistLink {
    link: string;
    title: string;
}
