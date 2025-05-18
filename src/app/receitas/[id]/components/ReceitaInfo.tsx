import { ReceitaProps } from "../../page"

export async function ReceitaInfo({id}: { id: string}) {
    
    //await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data: ReceitaProps = await response.json()
    
    return (
        <div className="flex flex-col items-center">
            <img key={data.id} src={data.image} width={350} height={350}></img> 
            
            <br></br>

            <div className="flex flex-col mt-9 p-2">
                <div className="m-5">
                    <h2 className="text-2xl text-blue-400 text-bold">Ingredientes:</h2>
                    {data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
            ))}
                </div>
                <br></br>
                <div className="m-5">
                    <h2 className="text-2xl text-blue-400 text-bold">Instruções:</h2>
                    {data.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                    ))}
                </div>
            </div>
           
        </div>
    )
}