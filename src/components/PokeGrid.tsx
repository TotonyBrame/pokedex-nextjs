import '@/styles/scrollbar.css';

interface PokeGridProps {
    className?: string;
}

export default function PokeGrid({className = ""}: PokeGridProps) {
    return (
        <div className={`relative mt-1 md:mx-6 bg-purple-100 h-full ${className}`}>
            <div
                className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-0 auto-rows-min overflow-y-auto custom-scrollbar pr-2 md:pr-4 h-[calc(100vh-160px)]"
            >

                <div
                    key={132}
                    className="p-1 flex items-center justify-center hover:bg-purple-200 cursor-pointer"

                >
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png`}
                        alt={`Pokémon #132`}
                        className="w-12 h-12 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}