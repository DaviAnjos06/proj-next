import { Suspense } from "react";
import { ReceitaProps } from "../page";
import { ReceitaInfo } from "./components/ReceitaInfo";

export default async function ReceitaID({params}: {params: Promise<{id : string}>}) {
    
    const {id} = await params;

    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data: ReceitaProps = await response.json()

    return (
        <div>
            <br></br>
            <h1 className="text-4xl font-bold text-center">{data.name}</h1>
            <br></br>

            <Suspense fallback={<h1>Carregando...</h1>}>
                <ReceitaInfo id={id}/>
            </Suspense>
        </div>
    )
}