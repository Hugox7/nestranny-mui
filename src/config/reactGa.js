import reactGA from 'react-ga';

const trackingId = 'UA-143542290-1';

export const initGA = () => {
    reactGA.initialize(trackingId);
}

export const pageView = (path) => {
    reactGA.pageview(path);
}

export const anonymize = () => {
    reactGA.set({ anonymizeIp: true })
}