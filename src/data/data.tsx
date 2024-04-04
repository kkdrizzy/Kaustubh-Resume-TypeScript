import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kaustubh Katti Resume',
  description: "site built for Kaustubh's resume using react template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Kaustubh Katti`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Ireland Based <strong className="text-stone-100">Full Stack Software Engineer/ Data Engineer</strong>.
        As a dynamic software developer with a passion for innovation, I bring a wealth of experience in data analysis,
        project management, and software development. My solid foundation in data engineering, statistical analysis,
        and programming empowers me to excel in dynamic environments. With a keen eye for detail and dedication to delivering exceptional results,
        I am eager to leverage my skills and experience to drive tangible business outcomes through cutting-edge software solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As I was growing up, I would always tear down my toys for the sole purpose of understanding 
  the mechanism. Coming back to the present, I saw the same opportunity in Computer science. The binary simplicity 
  behind the complex world of computers.`,
  aboutItems: [
    {label: 'Location', text: 'Dublin, Ireland', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Table Tennis, Esports', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Limerick', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Currys plc', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Marathi',
        level: 10,
      },
      {
        name: 'Kannada',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 5,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'JSP Servlet',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'PHP',
        level: 7,
      },
    ],
  },
  {
    name: 'General Skills',
    skills: [
      {
        name: 'Leadership',
        level: 8,
      },
      {
        name: 'Management',
        level: 6,
      },
      {
        name: 'Stakeholder engagement',
        level: 10,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Azure',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Pandas',
        level: 10,
      },
      {
        name: 'Data Analytics',
        level: 8,
      },
      {
        name: 'Machine Learning',
        level: 7,
      },
      {
        name: 'Power BI',
        level: 8,
      },
    ],
  },

];


/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022 - 2023',
    location: 'University Of Limerick',
    title: 'Masters of Sciences in Business Analytics',
    content:<ul>
      <li>- Winner of Digital Futures Lab Competition (Conceptualization of HSE on a global scale).</li>
      <li>- Specialized in data engineering, project management, and big data analysis.</li>
      <li>- 3.32 CGPA</li>
    </ul>
   ,
  },
  {
    date: '2021 - 2022',
    location: 'Purdue University',
    title: 'Post-Graduate Diploma in Data Science',
    content: <p>Major: Data Science in Python | Minor: Data Analytics in Python</p>,
  },
  {
    date: '2015 - 2019',
    location: 'Dr.D.Y.Patil College of Engineering, Ambi',
    title: 'Bachelor in Engineering (Computer)',
    content: <p>Major: Data Structures and Algorithms| Minor: Embedded Software Development</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2023 - Present',
    location: 'Currys plc',
    title: 'Senior Technical Support Analyst',
    content: (
      <ul>
        <li>• Spearheaded resolution of technical issues spanning Microsoft Office, Cloud Services, Plugins, and Computer
          Services for diverse clientele.</li>
        <li>• Guided and empowered a team of 4 to curate an exhaustive compendium of frequently encountered FAQs.</li>
        <li>• Pioneered automation of over 100 operational processes, streamlining returns, repairs, and customer queries.</li>
        <li>• Instrumental in driving business growth through strategic product recommendations, and enhancing customer
          satisfaction.</li>
        <li>• Contribute to daily performance evaluations and strategic planning for the Carrickmines store.</li>
        <li>• Employ data-driven insights to forecast KPIs and mitigate common issues, ensuring stakeholder alignment.</li>
      </ul>
    ),
  },
  {
    date: 'Feb 2022 - Aug 2022',
    location: 'Transerve Technologies',
    title: 'Software Development Engineer-1',
    content: (
      <ul>
        <li>• Catalyzed efficiency gains within Indian government systems through the development, deployment, and
          upkeep of 8/15 microservices.
        </li>
        <li>• Acknowledged by governmental authorities for transformative contributions achieved with optimized resource
          utilization.</li>
        <li>• Orchestrated seamless integration of new APIs, chaired scrum meetings, and executed daily deployments
          post rigorous code scrutiny.
        </li>
        <li>• Proficient in a comprehensive technology stack including Spring Boot, React, Junit, UAT, Docker, Kafka,
          PostgreSQL, JSP Servlet, Linux, and Windows Server.
        </li>
        <li>• Transitioned adeptly into the ML/Ops domain, leveraging PySpark, Pandas, GeoPandas, Apache Hadoop,
          and Power BI to unearth actionable insights, fostering revenue growth by 10%.</li>
        <li>• Learnt Data-Preprocessing, Data-Cleaning, and Data-Mining techniques to leverage the success of my
          project.
        </li>
      </ul>
    ),
  },
  {
    date: 'Feb 2021 - Nov 2021',
    location: 'BlogVault Inc.',
    title: 'Senior Technical Support Engineer',
    content: (
      <ul>
        <li>• Engineered workflow enhancements through data-driven analysis, optimizing support team efficiency.
        </li>
        <li>• Nurtured and upskilled a cohort of 15 colleagues on system processes, fostering a culture of continual learning.</li>
        <li>• Orchestrated project lifecycles with a focus on scope management and stakeholder engagement, servicing
          4 key clients.
        </li>
        <li>• Leveraged a suite of tools including JIRA, Ticketing Services, Chatbot, CRM, PHP, and Java to fuel system
          improvements and development.</li>
      </ul>
    ),
  },
  {
    date: 'Feb 2021 - Nov 2021',
    location: 'GreyAtom Edutech Pvt. Ltd.',
    title: 'Software Engineer',
    content: (
      <ul>
        <li>• Architected, deployed, and maintained 2/7 mission-critical microservices, amplifying organizational
          capabilities.
        </li>
        <li>• Collaborated seamlessly with interdisciplinary teams to translate client needs into robust software
          solutions.
        </li>
        <li>• Proficiency spans Agile, Waterfall, and Bugfix methodologies, with a keen eye for performance
          optimization and feature augmentation.
        </li>
        <li>• Executed rigorous UAT and Integration testing protocols to ensure product integrity.</li>
        <li>• Resolved technical hurdles for a broad student base of 500, with agility and precision.</li>
        <li>• Command proficiency in Spring Boot, Angular, Docker, Redis, Kafka, PostgreSQL, GRPF, and Python.</li>
        <li>• Harnessed the scalability of AWS and Gcloud to deploy cutting-edge applications, elevating user
          experiences.</li>

      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mahesh Shelke',
      text: 'He is having very good Analysis & Programming skill, also hardworking & more dedicated towards work. Truly a genius in his Development.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Samuel Nadar',
      text: 'We worked together for more than a year in Greyatom Edutech Private limited as i remember Kaustubh use to say "coding is like magic! And we are magicians" and then I thought what a different way to being a developer.\n' +
        '\n' +
        'And here I am recommending the magician of greyatom,the way he use to tackle the problem with ease was simply mind blowing.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Zoheb Qazi',
      text: 'Working with Kaustubh has been a unique experience. He has the spark of creativity and drive that you rarely see in engineers nowadays. His ability to think outside the box can be a real bonus for any team.\n' +
        '\n' +
        'On a personal level, Kaustubh is a very approachable person and quite easy to talk to. His hobbies and passion make him a very interesting person if you give him time to bloom.\n' +
        '\n' +
        'Kaustubh has a long and fruitful road ahead of him and I see him growing steadily and positively in the near future.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Mayuresh Shilotri',
      text: 'Kaustubh is a valuable team player, He has worked for me for past 1 year and has provided important insights in some complex problems. ' +
        'He is attentive, hard working and more importantly an excellent human being',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'For any further queries on my profile please contact using any of the following platforms',
  items: [
    {
      type: ContactType.Email,
      text: 'kaustubhkatti.205@gmail.com',
      href: 'mailto:kaustubhkatti.205@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Leopardstown, Dublin, Ireland',
      href: 'https://www.google.com/maps/place/Leopardstown+Valley/@53.2589773,-6.201422,17.4z/data=!4m6!3m5!1s0x486709b3c31505a3:0x194a1ed838466c43!8m2!3d53.2582562!4d-6.1983879!16s%2Fg%2F1ptxrrvw8?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@kaustubh205',
      href: 'https://www.instagram.com/kaustubh205/',
    },
    {
      type: ContactType.Github,
      text: 'kkdrizzy',
      href: 'https://github.com/kkdrizzy',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Kaustubh Katti',
      href: 'https://www.linkedin.com/in/kaustubh-katti-673a44145',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kkdrizzy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kaustubh-katti-673a44145'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kaustubh205/'},
];
