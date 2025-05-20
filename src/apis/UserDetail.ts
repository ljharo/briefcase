export interface UserDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface SocialNetworkDto {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedIn?: string;
  github?: string;
}

export interface PresentationDto {
  title: string;
  subTitle: string;
}

export interface CvDetailDto {
  filePath: string;
  fileName: string;
}

export function getUserDeatil(): UserDto {
  return {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phoneNumber: "1234567890",
  };
}

export function getSocialNetwork(): SocialNetworkDto {
  return {
    instagram: "@johnDoe",
    facebook: "@johnDoe",
    twitter: "@johnDoe",
    linkedIn: "@johnDoe",
    github: "@johnDoe",
  };
}

export function getPresentation(): PresentationDto {
  return {
    title: "Backend Developer",
    subTitle:
      "We create the critical infrastructure that sustains the solutions of the future",
  };
}

export function getCvDetail(): CvDetailDto {
  return {
    filePath: "documents/CV Luis Haro - EN.pdf",
    fileName: "CV Luis Haro.pdf",
  };
}
