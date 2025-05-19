export interface ExperienceDto {
  title: string;
  subTitle: string;
  url: string;
  description: string;
}

//3 modificar
export function getExperience(): ExperienceDto[] {
  return [
    {
      title: "Pago Chinchin",
      subTitle: "QA (Quality analyst) - 2022",
      url: "https://www.pagochinchin.com/",
      description: `responsible for guaranteeing the quality of the software by
                conducting manual and automated tests, error identification,
                documentation of results and collaboration with development
                equipment to improve processes and ensure that the product meets
                the required standards.`,
    },
    {
      title: "Deloitte",
      subTitle: "QA (Quality analyst) - 2022",
      url: "https://www.deloitte.com/latam/es/about/story/nuestros-marketplaces/deloitte-venezuela.html",
      description: `Identification and Evaluation Risks in IT systems, developing
                mitigation and coordinates audit strategies. The objective is to
                ensure that the organization complies with regulations and
                protects its assets, communicating findings and recommendations
                to senior management to improve risk management.`,
    },
    {
      title: "HI4AI",
      subTitle: "Backend AI Developer - 2023",
      url: "https://hi4.ai",
      description: `As Backend Developer, design and development the logic of the
                server and the databases that support the applications. I take
                care of creating APIS, optimizing performance and ensuring data
                security. I work in close collaboration with the Fronte team to
                ensure fluid and efficient integration.`,
    },
  ];
}
