import { ReceitaProps } from "../page";

export default async function ReceitaID({params}: {params: Promise<{id : string}>}) {
    
    const {id} = await params;

    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data: ReceitaProps = await response.json()

    return (
        <div>
            <h1>Receita Número {id}</h1>

            <h2>{data.name}</h2><br></br>
            <h2>
                {data.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
            </h2>
            <br></br>
            <h2>
                {data.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
            ))}
            </h2>
        </div>
    )
}