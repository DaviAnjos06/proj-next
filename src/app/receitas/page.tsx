import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Receitas',
  description: 'Clone de site de receitas em Next.js'
}

export interface ReceitaProps {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    image: string
}

interface ResponseProps {
    recipes: ReceitaProps[]
}

export default async function ReceitasPage() {

    const response = await fetch('https://dummyjson.com/recipes')
    const data: ResponseProps = await response.json()

    //console.log(data);

   return (
        <div>
            <br></br>

            <div className="flex flex-wrap justify-center">
                {data.recipes.map(recipe => (
                    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-10" key={recipe.id}>
                        <div className="relative mx-4 -mt-6 h-40 w-70 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                            <img src={recipe.image} className="w-auto h-auto"></img>
                        </div>
                     
                        <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{recipe.name}</h2>
                        <div className="p-6 pt-0">
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                             <Link href={`/receitas/${recipe.id}`}>Ver receita</Link>
                            </button>
                        </div>
                        
                        <br></br>
                    </div>
                ))}
            </div>
        </div>
    )
}