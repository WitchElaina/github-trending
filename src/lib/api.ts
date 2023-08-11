import axios from 'axios';

export interface Repository {
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  currentPeriodStars: number;
  builtBy: {
    username: string;
    href: string;
    avatar: string;
  }[];
}

export interface RepoParams {
  language?: string;
  since?: string;
  spoken_language?: string;
}

export const getTrending = async (
  language?: string,
  since?: string,
  spokenLanguage?: string,
): Promise<Repository[]> => {
  const url = 'https://api.gitterapp.com/repositories';
  const params: RepoParams = {};
  if (language) {
    params.language = language;
  }
  if (since) {
    params.since = since;
  }
  if (spokenLanguage) {
    params.spoken_language = spokenLanguage;
  }
  const { data } = await axios.get<Repository[]>(url, { params });
  return data;
};
