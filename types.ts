
export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Reference {
  name: string;
  position: string;
  phone: string;
  email?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  asciiArt: string;
  asciiArtMobile: {
    paul: string;
    perez: string;
  };
  about: string;
  experiences: Experience[];
  skills: SkillGroup[];
  contact: {
    email: string;
    phone: string;
    references: Reference[];
  };
}
