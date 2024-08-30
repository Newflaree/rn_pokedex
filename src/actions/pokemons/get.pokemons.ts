// Api
import { pokeApi } from '../../config/api';
// Entities
import { Pokemon } from '../../domain/entities';


export const getPokemons = async (): Promise<Pokemon[]> => {
  try {
    const url = '/pokemon';
    const { data } = await pokeApi.get( url );

    console.log( data );

    return [];
  
  } catch ( error ) {
    throw new Error( 'Error getting pokemons' );
  }
}
