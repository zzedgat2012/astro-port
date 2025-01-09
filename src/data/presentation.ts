type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "devops@edgar-ferreira.com",
  title: "Hi, I’m Edgar 👋",
  // profile: "/profile.webp",
  description:
    "Aeeeee, i'm a *brazilian devops engineer* with over *5+ years* of IT experience. I am freelancer developer working with *OCI (Oracle Cloud Infrastructure)*. Outside of work I complete my World of Warcraft transmog collections and learning Kotlin.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/@guy_thew",
    },
    {
      label: "Bento",
      link: "https://bento.me/edgar-ferreira",
    },
    {
      label: "Github",
      link: "https://github.com/zzedgat2012",
    },
  ],
};

export default presentation;
