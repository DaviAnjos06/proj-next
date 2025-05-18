import Link from "next/link"

export function Header() {
    return(
        <header className="flex px-4 py-8 bg-blue-400 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <h2 className="text-2xl text-bold">Tudo Gostoso Clone</h2>

                <nav>
                <ul className="flex items-center justify-center gap-2">
                    <li>
                        <Link href={'/'}>Home</Link>
                        
                    </li>
                    <li>
                        <Link href={'/receitas'}>Receitas</Link>
                        
                    </li>
                    <li>
                        <Link href={'/sobre'}>Sobre</Link>
                        
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}