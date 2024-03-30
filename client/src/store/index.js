import {proxy} from 'valtio';


const state = proxy({
    intro: true,
    color: '#0437dd',
    isLogoTexture: false,
    isFullTexture: false,
    isqrTexture: true,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    qrDecal: './react.png'
});

export default state;