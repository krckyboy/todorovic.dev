export interface Experience {
  companyName: string;
  position: {
    title: string;
    startDate: Date;
    endDate?: Date;
    location: string;
    achievements: string[];
  }[];
}

const data: Experience[] = [
  {
    companyName: 'Citrus Systems',
    position: [
      {
        title: 'Lead Front-End Developer',
        location: 'Belgrade, Serbia',
        startDate: new Date(2021, 6),
        achievements: ['Successfully led the team in migrating to React and Vue, resulting in improved performance and maintainability.',
          'Developed and maintained internal front-end framework used across multiple projects.'
        ]
      },
      {
        title: 'Front-End Developer',
        location: 'Belgrade, Serbia',
        startDate: new Date(2020, 7),
        endDate: new Date(2021, 5),
        achievements: ['Revamped the outdated codebase into a more streamlined, modular structure while preserving our proprietary internal front-end framework utilized across various iGaming projects.',
          'This involved extensive use of technologies such as HTML5, ES6+, SASS, and TWIG.'
        ]
      }
    ]

  },
  {
    companyName: 'Boca Tech',
    position: [{
      title: 'Front-End Web Developer',
      location: 'Belgrade, Serbia',
      startDate: new Date(2018, 4),
      endDate: new Date(2019, 2),
      achievements: ['As the sole front-end developer in my first role, I successfully executed numerous projects, including a complex appointment scheduling platform for beauty services.',
        'My contributions extended beyond coding, integrating UI/UX designs with functional requirements and managing data entries.'
      ]
    }]
  }
];

export default data;