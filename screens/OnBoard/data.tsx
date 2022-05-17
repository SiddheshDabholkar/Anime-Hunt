import img1 from './../../assets/onboarding/one.png';
import img2 from './../../assets/onboarding/two.png';
import img3 from './../../assets/onboarding/three.png';

export const data = [
  //   {id: 1, img: '', head: 'Scan Anime', body: '',bgColor: '',},
  {
    id: 0,
    img: img1,
    head: 'Manga',
    body: 'Read your favourite managa',
    bgColor: '#00066e',
  },
  {
    id: 1,
    img: img2,
    head: 'Characters',
    body: 'Find your favorite Anime & Manga characters',
    bgColor: '#00055c',
  },
  {
    id: 2,
    img: img3,
    head: 'Castings',
    body: 'Know your favorite characters casting',
    bgColor: '#000442',
  },
];

export type dataType = {
  id: number;
  img: string;
  head: string;
  body: string;
  bgColor: string;
};
