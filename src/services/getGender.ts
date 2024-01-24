// Definicion de interfaz 
export interface Genre {
  id: string;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: string;
}

export interface ApiResponse {
  data: Genre[];
}



// Función para obtener géneros por IDs
export async function getAllGendersByIds(genreIds: string[]): Promise<Genre[]> {
  const apiUrl = 'https://deezerdevs-deezer.p.rapidapi.com/genre/';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23d1dce123msh0b2d3293e7f0410p1e2eb4jsn54b92acbeb22',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  try {
    const genrePromises = genreIds.map(async (genreId) => {
      const url = `${apiUrl}${genreId}`;
      const response = await fetch(url, options);
      const result = await response.json() as Genre;
      return result
    });

    const genres = await Promise.all(genrePromises);

    return genres;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los géneros');
  }
}