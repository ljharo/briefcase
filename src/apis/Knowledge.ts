export interface KnowledGeDto {
  name: string;
  icon: string;
  url: string;
}

export interface KnowledgeSectionDto {
  title: string;
  KnowledGeList: KnowledGeDto[];
}

//3 hay que mejorar esta logica
export function getKnowledgeSectionList(): KnowledgeSectionDto[] {
  return [
    {
      title: "Languages",
      KnowledGeList: [
        {
          name: "Python",
          icon: "https://skillicons.dev/icons?i=py",
          url: "https://www.python.org/",
        },
        {
          name: "Rust",
          icon: "https://skillicons.dev/icons?i=rust",
          url: "https://www.rust-lang.org",
        },
        {
          name: "JavaScript",
          icon: "https://skillicons.dev/icons?i=js",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "TypeScript",
          icon: "https://skillicons.dev/icons?i=ts",
          url: "https://www.typescriptlang.org",
        },
        {
          name: "C",
          icon: "https://skillicons.dev/icons?i=c",
          url: "https://en.cppreference.com/w/c/language",
        },
        {
          name: "GO",
          icon: "https://skillicons.dev/icons?i=go",
          url: "https://go.dev",
        },
      ],
    },
    {
      title: "Databases",
      KnowledGeList: [
        {
          name: "Postgresql",
          icon: "https://skillicons.dev/icons?i=postgres",
          url: "https://www.postgresql.org",
        },
        {
          name: "mysql",
          icon: "https://skillicons.dev/icons?i=mysql",
          url: "https://www.mysql.com",
        },
        {
          name: "Mongodb",
          icon: "https://skillicons.dev/icons?i=mongo",
          url: "https://www.mongodb.com",
        },
      ],
    },
    {
      title: "Backend",
      KnowledGeList: [
        {
          name: "Django",
          icon: "https://skillicons.dev/icons?i=django",
          url: "http://www.djangoproject.com",
        },
        {
          name: "NestJS",
          icon: "https://skillicons.dev/icons?i=nest",
          url: "https://nestjs.com",
        },
        {
          name: "FastAPI",
          icon: "https://skillicons.dev/icons?i=fastapi",
          url: "https://fastapi.tiangolo.com",
        },
        {
          name: "Flask",
          icon: "https://skillicons.dev/icons?i=flask",
          url: "https://flask.palletsprojects.com",
        },
      ],
    },
    {
      title: "Frontend",
      KnowledGeList: [
        {
          name: "HTML",
          icon: "https://skillicons.dev/icons?i=html",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML",
        },
        {
          name: "Css",
          icon: "https://skillicons.dev/icons?i=css",
          url: "https://www.w3schools.com/css/",
        },
        {
          name: "React",
          icon: "https://skillicons.dev/icons?i=react",
          url: "https://es.react.dev",
        },
      ],
    },
    {
      title: "Dev Box",
      KnowledGeList: [
        {
          name: "Docker",
          icon: "https://skillicons.dev/icons?i=docker",
          url: "https://www.docker.com",
        },
        {
          name: "AWS",
          icon: "https://skillicons.dev/icons?i=aws",
          url: "https://aws.amazon.com",
        },
        {
          name: "Kubernetes",
          icon: "https://skillicons.dev/icons?i=kubernetes",
          url: "https://kubernetes.io",
        },
      ],
    },
    {
      title: "Others",
      KnowledGeList: [
        {
          name: "Git",
          icon: "https://skillicons.dev/icons?i=git",
          url: "https://git-scm.com",
        },
        {
          name: "GitHub",
          icon: "https://skillicons.dev/icons?i=github",
          url: "https://github.com",
        },
        {
          name: "Node.js",
          icon: "https://skillicons.dev/icons?i=nodejs",
          url: "https://nodejs.org",
        },
        {
          name: "Linux",
          icon: "https://skillicons.dev/icons?i=linux",
          url: "https://www.linux.org",
        },
        {
          name: "Selenium",
          icon: "https://skillicons.dev/icons?i=selenium",
          url: "https://www.selenium.dev",
        },
      ],
    },
  ];
}
