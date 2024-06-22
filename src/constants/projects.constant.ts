import { Project } from '@/types/project.type';
import { Technology } from '@/enums/technology.enum';

export const PROJECTS: Array<Project> = [
  {
    name: 'E-commerce App',
    description: `A comprehensive e-commerce platform that streamlines the process 
    of online trading. It offers an intuitive user interface, robust security measures 
    for transactions, and a diverse product catalog, enhancing the overall user experience in the digital shopping landscape.`,
    technologies: [Technology.ANGULAR, Technology.CSS, Technology.HTML],
    githubUrl: 'https://github.com/akturanilyas/e-commerce-app/',
  },
  {
    name: 'Library API',
    // eslint-disable-next-line max-len
    description: 'A server-side application that powers a bookcase application, providing a robust and scalable solution for managing a vast collection of books and related resources.',
    technologies: [Technology.ANGULAR, Technology.CSS, Technology.HTML],
    githubUrl: 'https://github.com/akturanilyas/library-api/',
  },
  {
    name: 'KTU Sosyal',
    // eslint-disable-next-line max-len
    description: 'A dedicated social media platform for the students of Karadeniz Technical University. This frontend project facilitates seamless interaction and engagement among students, fostering a vibrant academic community.',
    technologies: [Technology.ANGULAR, Technology.CSS, Technology.HTML],
    githubUrl: 'https://github.com/akturanilyas/ktu-sosyal/',
  },
  {
    name: 'KTU Sosyal API',
    // eslint-disable-next-line max-len
    description: 'The backend of the KTU Sosyal application, designed to efficiently handle data management and server-side logic, ensuring smooth and reliable performance for the social media platform.',
    technologies: [Technology.ANGULAR, Technology.CSS, Technology.HTML],
    githubUrl: 'https://github.com/akturanilyas/ktu-sosyal-api/',
  },
];
