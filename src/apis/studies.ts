export interface studiesDto {
  title: string;
  subTitle: string;
  year: string;
  url: string;
}

export function getStudies(): studiesDto[] {
  return [
    {
      title: "Computer Engineering",
      subTitle: "Universidad Alejandro de Humboldt",
      year: "2018 - 2022",
      url: "https://www.unihumboldt.edu.ve",
    },
    {
      title: "Master in Artificial Intelligence",
      subTitle: "CEUPE",
      year: "2023 - 2024",
      url: "https://www.ceupe.com",
    },
  ];
}
