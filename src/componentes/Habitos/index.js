import { useState } from "react"

import Topo from "../Topo";
import {Conteudo, AddHabito} from "./style"
import Rodape from "../Rodape"
import NovoHabito from "./NovoHabito"

export default function Habitos(){
    const [novoHabito, setNovoHabito] = useState({})
    const [addHabito, setAddHabito]= useState(false)

    function criarHabito(info){
        setNovoHabito({...novoHabito, info})
    }

    return(
        <>
            <Topo />
            <Conteudo>
                <AddHabito>
                    <h1>Meus hábitos</h1>
                    <button onClick={()=> setAddHabito(true)}>+</button>
                </AddHabito>
                {addHabito? <NovoHabito criarHabito={criarHabito}/> : ""}

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Conteudo>
            <Rodape />
        </>
    )
}
