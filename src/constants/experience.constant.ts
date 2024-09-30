export type Experience = {
  startDate: string;
  endDate?: string;
  title: string;
  description?: string;
  company: string;
  location: string;
  companyImage: string;
  imageColor: string;
  imageBorder: string;
  technologies?: Array<string>;
  responsibilities?: Array<string>;
};

export const EXPERIENCES: Array<Experience> = [
  {
    startDate: '2024-02-01',
    title: 'Software Engineer',
    company: 'Wingie Enuygun',
    location: 'Istanbul',
    companyImage: '/assets/img/wingie-enuygun-logo.png',
    imageColor: 'bg-enuygun-green',
    imageBorder: 'border-enuygun-green',
    technologies: ['React', 'Next.js', 'TypeScript', 'React-Hook-Form', 'TailwindCSS', 'Styled-Components', 'Yup'],
  },
  {
    startDate: '2021-11-01',
    endDate: '2024-02-01',
    title: 'Software Engineer',
    company: 'KolayBi\'',
    location: 'Istanbul',
    companyImage: '/assets/img/kolaybi-logo.png',
    imageColor: 'bg-kolaybi-blue',
    imageBorder: 'border-kolaybi-blue',
    responsibilities: [
      'Developed a fully functional regular, responsive pre-accounting program website.',
      'Database design and coding of e-Invoice data has been implemented. 2 e-Invoice provider integrated',
      'Configured new projects to Automate Web Deployments with Jenkins.',
      'Work for financial advisor program (Bi\'Link).',
      'Work for CRM (KolayBi\' CRM).',
      'A database was designed and coded for sales with a promotional code.',
    ],
    technologies: [
      'ReactJS',
      'TypeScript',
      'TailwindCSS',
      'Redux',
      'RTKQuery',
      'React-Hook-Form',
      'Jest',
      'Testing-library',
      'Bootstrap',
      'JavaScript',
      'Angular 1.x',
      'MySQL',
      'AWS EC2',
      'Jenkins',
      'Nginx',
      'PHP',
      'Laravel',
      'msw',
      'Vite',
    ],
  },
  {
    startDate: '2020-06-01',
    endDate: '2020-09-01',
    title: 'Software Engineer Intern',
    company: 'KolayBi\'',
    location: 'Istanbul',
    companyImage: '/assets/img/kolaybi-logo.png',
    imageColor: 'bg-kolaybi-blue',
    imageBorder: 'border-kolaybi-blue',
    responsibilities: [
      'Existing projects configured to automate web deployments with Jenkins using Master-Slave architecture.',
      'Jenkins CI/CD, Web Deploy, AWS, Nginx',
    ],
    technologies: ['Jenkins', 'AWS EC2', 'Nginx'],
  },
];
