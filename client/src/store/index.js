import {proxy} from 'valtio';


const state = proxy({
    intro: true,
    color: '#0437dd',
    isLogoTexture: true,
    isFullTexture: false,
    isqrTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    qrDecal: './QR_Code.png'
});

export default state;