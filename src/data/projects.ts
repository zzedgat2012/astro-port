export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Cinform Online",
    techs: ["PHP", "WordPress", "AWS", "Ansible/Terraform"],
    link: "https://play.google.com/store/apps/details?id=org.carmelitasmensageiros.benfeitor&hl=pt_BR",
  },
  {
    title: "WWGestor",
    techs: ["PHP", "JavaScript"],
    link: "https://wwgestor.com.br/",
  },
  {
    title: "Serigy",
    techs: ["Oracle Cloud", "PHP", "React", "Ansible/Terraform", "Kubernetes"],
    link: "https://serigy.net",
  },
  {
    title: "Aonde Morar",
    techs: ["Laravel", "React", "AWS"],
    link: "https://github.com/MaeWolff/astro-portfolio-template",
    isComingSoon: true,
  },
];

export default projects;
