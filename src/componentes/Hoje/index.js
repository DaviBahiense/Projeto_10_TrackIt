import { useEffect,  useContext } from 'react'
import axios from 'axios' 

import Context from '../Context'
import Topo from "../Topo"
import Rodape from "../Rodape"

function Hoje(){

    const { token } = useContext(Context)
    console.log(token)           


     useEffect(()=>{
        const promessa = (axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }))
        promessa.then((resposta)=>{console.log(resposta.data)
        })
    },[])

    return(
        <>
        <Topo />

        <Rodape />
        </>
    );
}

export default Hoje;
