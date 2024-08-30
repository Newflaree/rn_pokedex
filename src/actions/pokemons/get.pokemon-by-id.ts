// Api
import { pokeApi } from '../../config/api';
// Entities
import { Pokemon } from '../../domain/entities';
// Interfaces
import type { PokeAPIPokemon } from '../../infrastructure/interfaces';
// Mappers
import { PokemonMapper } from '../../infrastructure/mappers';


export const getPokemonById = async ( id: number ): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeAPIPokemon>( `/pokemon/${ id }` );
    const pokemon = await PokemonMapper.pokeApiPokemonToEntity( data );

    return pokemon;
  
  } catch ( error ) {
    throw new Error( `Error getting pokemon by id: ${ id }` );
  }
}
