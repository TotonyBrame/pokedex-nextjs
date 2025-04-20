export default function SortModal() {
    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-80">
                <h2 className="text-xl font-semibold text-center mb-4">Trier par</h2>

                <div className="space-y-3">
                    <button
                        className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 active:scale-95 transition cursor-pointer"
                    >
                        Numéro du Pokédex
                    </button>

                    <button
                        className="w-full py-2 px-4 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 active:scale-95 transition cursor-pointer"
                    >
                        Ordre Alphabétique
                    </button>
                </div>

                <button className="mt-6 block mx-auto text-sm text-gray-500 hover:underline cursor-pointer">
                    Fermer
                </button>
            </div>
        </div>
    )
}