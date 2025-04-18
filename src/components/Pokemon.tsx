interface PokemonProps {
  className?: string;
}

export default function Pokemon({ className = "" }: PokemonProps) {
  const pokemonId = null;
  if (pokemonId === null) {
    return (
      <div className={`h-full flex flex-col items-center justify-center p-4 ${className}`}>
        <div className="rounded-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <span className="material-icons text-6xl mb-4">info</span>
              <p className="text-xl">Sélectionnez un Pokémon pour voir ses détails</p>
            </div>
          </div>

          <div className="h-[76px] mt-4"></div>
        </div>
      </div>
    );

  }

  return (
    <div className={`flex flex-col items-center justify-center p-4 ${className}`}>
      <div className="md:hidden w-full flex justify-start mb-4">
        <button
          onClick={onClose}
          className="flex items-center text-purple-700 font-medium"
        >
          <span className="material-icons mr-1">arrow_back</span>
          Retour à la liste
        </button>
      </div>

      <div className="rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png`}
            alt={`Pokémon #132`}
            className="w-48 h-48 object-contain"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md mt-4 mx-auto max-w-[200px]">
          <div className="bg-[#a284da] text-white py-1 px-3 text-center">
            No. 132
          </div>
          <div className="bg-white py-1 px-3 text-center">
            Métamorph
          </div>
        </div>
      </div>
    </div>
  );
}