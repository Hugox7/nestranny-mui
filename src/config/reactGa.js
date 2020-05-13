import reactGA from 'react-ga';

const trackingId = process.env.REACT_APP_TRACKING_ID;

export const initGA = () => {
    reactGA.initialize(trackingId);
}

export const pageView = (path) => {
    reactGA.pageview(path);
}

export const anonymize = () => {
    reactGA.set({ anonymizeIp: true })
}