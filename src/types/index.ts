interface IGenre {
    name: string;
}
export interface EpisodeType {
    airdate?: string;
    airstamp?: string;
    airtime?: string;
    id: number;
    image?: {
      original?: string;
      medium?: string;
    };
    name: string;
    number: number;
    rating: {
      average?: number;
    };
    runtime: number;
    season: number;
    summary: string;
    type?: string;
    url?: string;
  }