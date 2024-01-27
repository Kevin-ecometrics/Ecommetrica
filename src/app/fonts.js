import { Roboto, Titillium_Web, Montserrat } from "next/font/google";

export const titillium = Titillium_Web({ 
    weight: ['200','400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const roboto = Roboto({
    weight: ['300','400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const montse = Montserrat({
    weight: ['300','400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

