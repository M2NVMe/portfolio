// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'M2NVMe', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['M2NVMe/globalfoodflutter', 'M2NVMe/firebase_rodi', 'M2NVMe/cubitflutter', 'M2NVMe/pas1_mobile_11pplg2_7'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Extra Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'RailDrive',
          description:
            'My personal Roblox game project. Made to improve on how I handle multiple situation that is out of my reach and resolve it as quickly as possible',
          imageUrl:
            'https://tr.rbxcdn.com/180DAY-4905037184648dc5b670867f7d5afbcf/768/432/Image/Webp/noFilter',
          link: 'https://www.roblox.com/games/7048507604/UPDATE-Untitled-Japanese-based-Ro-Scale-Game',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Bumi Bagus Wiraguna', description: 'My personal portfolio Website', imageURL: '' },
  social: {
    linkedin: 'bagus-wiraguna-59808130a',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'M2SJ_J', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'm2sj',
    telegram: '',
    website: 'https://m2nvme.github.io/portfolio/',
    phone: '085229921536',
    email: 'm2sjmail@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/14_u7m3Mv6b6CFcD7Oull5V0PNPojrp9-Xn9Djsmff1g/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Lua',
    'HTML',
    'JavaScript',
    'CSS',
    'C#',
    'Java',
    'C++',
    'Python',
    'Flutter',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Fresh Graduate',
      position: 'Not yet available',
      from: 'Planned 2026',
      to: 'Not yet available',
      companyLink: '#',
    },
  ],
  certifications: [
    {
      name: 'DBS Foundation Coding Camp 2024',
      body: 'Machine Learning Certificates',
      year: '2024',
      link: '#',
    },
    {
      name: 'SkilVul Lomba Digital Nasional',
      body: 'Web Development Certificates',
      year: '2023',
      link: '#',
    },
  ],
  educations: [
    {
      institution: 'SMK Raden Umar Said',
      degree: 'Rekayasa Perangkat Lunak',
      from: '2023',
      to: '2026',
    },
    {
      institution: 'SMP Negeri 3 Batang',
      degree: '-',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'SD Kauman 7 Batang',
      degree: '-',
      from: '2014',
      to: '2020',
    },
  ],
  publications: [
    //{
      //title: 'Publication Title',
      //conferenceName: '',
      //journalName: 'Journal Name',
     // authors: 'John Doe, Jane Smith',
      //link: 'https://example.com',
      //description:
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //},
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
