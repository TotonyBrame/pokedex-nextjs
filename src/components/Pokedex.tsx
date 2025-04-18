'use client'

import { useState } from "react";
import Pokemon from "@/components/Pokemon";
import PokeGrid from "@/components/PokeGrid";

export default function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);

  return (
    <main className="main pb-16">
      <h1 className="w-full py-2 text-center bg-purple-100 font-semibold text-xl">
        Trié par : Numéro
      </h1>

      <div className="poke-container flex flex-col md:flex-row h-full">
        <PokeGrid
          className={selectedPokemon === null ? "w-full md:w-[65%]" : "hidden md:block md:w-[65%]"}
        />

        {selectedPokemon !== null ? (
          <Pokemon
            className="w-full md:w-[35%]"
          />
        ) : (
          <div className="hidden md:block md:w-[35%]">
            <Pokemon
              className="w-full"
            />
          </div>
        )}
      </div>
    </main>
  );
}