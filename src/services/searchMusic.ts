import { DeezerApiResponse } from '../types/types';

const apiKey = '23d1dce123msh0b2d3293e7f0410p1e2eb4jsn54b92acbeb22';
const prefix = 'https://deezerdevs-deezer.p.rapidapi.com'

export async function searchMusic(query: string): Promise<DeezerApiResponse> {
  try {
    const apiURL = `${prefix}/search?q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };
    const response = await fetch(apiURL, options);
    const data = (await response.json()) as DeezerApiResponse;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

