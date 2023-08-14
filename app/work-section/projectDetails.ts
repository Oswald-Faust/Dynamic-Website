export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Influence",
    description:
      "Influence est un podcast avec des créatifs d'influence portant sur leurs passions et leurs évolutions leurs différents projets. Animé par moi, on reçoit les jeunes créatifs pour discuter de leurs projets, de leurs influences et bien plus !.",
    technologies: ["React", "CSS", "Chart.js"],
    github: "https://github.com/victorcodess/weather-forecast-website",
    demo: "https://sky-watch.vercel.app/",
    image: require(".//../../public/projects/skywatch-new.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Musically !",
    description:
      "Naissant de parler de la musique de tout horizons en jouant le rôle de critiques. Exit l'appréciation basique, ici, de vrais passionnés parlent de musique chaque semaine avec tous !",
    technologies: ["React", "CSS", "Merge Images"],
    github: "https://github.com/victorcodess/alpaca-image-generator",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: require(".//../../public/projects/alpaca-new.webp"),
    available: true,
  },
  {
    id: 3,
    name: "Be Dev !",
    description:
      "Conçu pour les développeurs, ce blog est une véritable documentation pour le parcours d'un développeur front-end, d'un véritable fullstack ou de tout autre qui cherche à avoir une carrière dans le code.",
    technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    github: "https://github.com/victorcodess/url-shortener",
    demo: "https://url-shortener-nine-delta.vercel.app",
    image: require(".//../../public/projects/shortener-new.webp"),
    available: true,
  },
  {
     id: 4,
     name: "Project Manager Expert",
     description:
       "Envie de gérer ses projets avec maniabilité ? Apprenez à développer les compétences de Project Manager pour transformer le management de vos journées !",
     technologies: ["Material UI", "React", "Formik"],
     github: "https://github.com/victorcodess/carpooling-service",
     demo: "",
     image: require(".//../../public/projects/carpool-new.webp"),
     available: false,
   },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
