import { Poppins, Orbitron } from 'next/font/google';

export const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

const typography = {
  fonts: {
    poppins: poppins.style.fontFamily,
    orbitron: orbitron.style.fontFamily,
  },
};

export default typography;
