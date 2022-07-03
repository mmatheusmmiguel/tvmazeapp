/**
 * @namespace DetailsService
 */

import GenericDAO from "../GenericDAO";

const route = 'shows';

export interface IGetDetails {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres?: {

    }[];
    status: string;
    runtime?: number;
    averageRuntime?: number;
    premiered?: number;
    ended?: number;
    officialSite?: string;
    schedule?: {
        time: string;
        days: {

        }[]
    }[]
    rating?: {
        avarage?: number;
    }[];
    weight: number;
    network: {
        id: number;
        name: string;
        country?: {
            name: string;
            code: string;
            timezone: string;
        }
        officialSite?: string;
    }
    webChannel?: string;
    dvdCountry?: string;
    externals: {
        tvrage?: string;
        thetvdb?: string;
        imdb: number;
    }[]
    image: {
        medium: string;
        original: string;
    }
    summary: string;
    _links: {
        
    }[]
    _embedded: {
        episodes: {
            id: string;
            url: string;
            name: string;
            season: number;
            number: number;
            type: string;
            runtime: number;
            airdate: string;
            airtime: string;
            image: {
                medium: string;
                original: string;
            }
        }[]
    }
}

const get = async (id?: string, filters?: { name: string; value: string; }[]): Promise<IGetDetails> => GenericDAO.get(route, id, filters);

export default {
  get
};
