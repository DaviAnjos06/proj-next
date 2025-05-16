export interface ReceitaProps {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
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
            <h1>todas as receitas</h1>

            <div>
                {data.recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.instructions}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}