// Api
import { pokeApi } from '../../config/api';
// Entities
import type { Pokemon } from '../../domain/entities';
// Interfaces
import type {
  PokeAPIPaginatedResponse,
  PokeAPIPokemon
} from '../../infrastructure/interfaces';
// Mappers
import { PokemonMapper } from '../../infrastructure/mappers';


export const getPokemons = async (
  page: number,
  limit: number = 20
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${ page * 10 }&limit=${ limit }`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>( url );

    const pokemonPromises = data.results.map( ( info ) => {
      return pokeApi.get<PokeAPIPokemon>( info.url );
    });

    const pokeApiPokemons = await Promise.all( pokemonPromises );
    const pokemonsPromise = pokeApiPokemons.map( ( item ) =>
      PokemonMapper.pokeApiPokemonToEntity( item.data )
    );

    return await Promise.all( pokemonsPromise );
  
  } catch ( error ) {
    console.log( error );
    throw new Error( 'Error getting pokemons' );
  }
}
