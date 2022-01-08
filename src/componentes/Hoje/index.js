import { useState, useEffect, useContext } from 'react';

import Context from '../Context'
import Topo from "../Topo"
import Rodape from "../Rodape"
import { Conteudo, AddHabito } from "./style"

function Hoje(){

    const { token, setProgresso } = useContext(Context);
    console.log(token)

    return(
        <>
        <Topo />
            <Conteudo>
                <AddHabito>
                    data
                    <button>+</button>
                </AddHabito>
            </Conteudo>
        <Rodape />
        </>
    );
}

export default Hoje;
