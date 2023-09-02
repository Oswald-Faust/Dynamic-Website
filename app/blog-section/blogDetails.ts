export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
};

export const blogDetails = [
   {
     title: "La roadmap des frameworks pour le futur dev'",
     image:
       "https://cdn.hashnode.com/res/hashnode/image/upload/v1628442954056/OHNFYAzz4.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
     date: "12/31/2022",
     url: "https://faustoswald.hashnode.dev/",
     available: true,
   },
   {
    title: "L'aventure Epitech, la page blanche de ma vie",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1672494063925/1ee2925f-e529-4a8b-9dd7-6eea996a34eb.png",
    date: "DEC 2022",
    url: "https://blog.victorwilliams.me/reflecting-on-my-18th-year-a-personal-review-of-2022",
    available: false,
  },
 /*  {
     title:
       "J. Cole, réussir avec simplicité et amour",
     image:
       "https://cdn.hashnode.com/res/hashnode/image/upload/v1624616590157/N4Hvd8NfZ.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
     date: "12/31/2022",
     url: "",
     available: false,
   },*/
];
