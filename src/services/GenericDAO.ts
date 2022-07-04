import axios from 'axios';
import constants from '../constants';

const get = async (
  route: string,
  id?: string,
  filters?: {
    name: string;
    value: string;
  }[],
): Promise<any> => {
  try {
    let response: any;
    let headers = {};

    let stringRequest: string = `${constants.BASE_URL}${route}`;

    if (id) {
      stringRequest = stringRequest + `/${id}`;
    }

    if (filters) {
      stringRequest = stringRequest + '?';
      filters.map((item, index) => {
        stringRequest =
          stringRequest +
          `${item.name}=${item.value}${
            !(filters.length - 1 === index) ? '&' : ''
          }`;
      });
    }

    response = await axios.get(stringRequest, {headers});
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const statusCode = e.response?.status;

      if (statusCode?.toString().startsWith('4')) {
        console.error('Verifique os dados e tente novamente.');
      }

      if (statusCode?.toString().startsWith('5')) {
        console.error('Servidor indisponível.');
      }
    }
  }
};

export default {
  get,
};
