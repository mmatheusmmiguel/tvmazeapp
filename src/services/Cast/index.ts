/**
 * @namespace CastService
 */

import GenericDAO from '../GenericDAO';

const route = 'shows/6771/cast';

export interface IGetCast {
  person: {
    id: number;
    url?: string;
    name: string;
    birthday: string;
    deathday?: string;
    gender: string;
    country: {
      name: string;
      code: string;
    };
    image: {
      medium: string;
      original: string;
    };
  };
  character: {
    id: number;
    url: string;
    name: string;
    image?: string;
  };
  voice?: boolean;
}

const get = async (): Promise<IGetCast[]> => GenericDAO.get(route);

export default {
  get,
};
