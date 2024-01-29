export interface JobItem {
  jobTitle: string;
  companyName: string;
  location: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

const data: JobItem[] = [
  {
    jobTitle: 'Lead Front-End Developer',
    companyName: 'Citrus Systems',
    location: 'Belgrade, Serbia',
    duration: 'Jul 2021 - Present',
    responsibilities: ['In charge of the migration to React and Vue framework on multiple iGaming projects',
      'Code reviewing, mentoring, creating and delegating tasks to further enhance the codebase'
    ],
    achievements: ['Successfully led the team in migrating to React and Vue, resulting in improved performance and maintainability',
      'Developed and maintained internal front-end framework used across multiple projects'
    ]
  }
];

export default data;