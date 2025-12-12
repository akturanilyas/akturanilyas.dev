import type { IconType } from 'react-icons';
import { MdAlternateEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type AboutLink = {
  icon: IconType;
  text: string;
  platform: string;
  link: string;
};

export const ABOUT_LINKS: Array<AboutLink> = [
  {
    link: 'https://www.linkedin.com/in/akturanilyas/',
    text: 'akturanilyas',
    platform: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    link: 'https://www.github.com/akturanilyas/',
    text: 'akturanilyas',
    platform: 'GitHub',
    icon: FaGithub,
  },
  {
    link: 'mailto:akturanilyas@gmail.com',
    text: 'akturanilyas@gmail.com',
    platform: 'Email',
    icon: MdAlternateEmail,
  },
];
