import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector((state) => state.pokemons);
  useEffect(() => {
    // ¿podría hacer el dispatch directamente de los pokemonsSlice? Pues depende,
    // si son funciones sincronas si, si son asincronas hay que hacerlo con el thunks
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {
        pokemons.map((poke) => (
          // {console.log(poke)}
          <li key={poke.name}>{poke.name}</li>
        ))
        }
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
