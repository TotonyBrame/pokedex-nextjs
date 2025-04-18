export default function Header() {
    return (
        <header className="w-full flex">
            <div className="w-full md:w-1/3 px-4 md:px-6 py-2 text-orange-500 uppercase font-medium
                            text-xl md:text-2xl bg-white responsive-clip
                            flex items-center justify-center md:justify-start">
                <div className="material-icons mr-2">format_list_bulleted</div>
                <span className="truncate">Région de Kanto</span>
            </div>
        </header>
    )
}