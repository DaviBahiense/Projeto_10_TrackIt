import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Conteudo, Opcoes, Barra} from './style'
import  Context  from "../Context";


export default function Bottom(){
    const {setProgresso} = useContext(Context);

    return(
        <Conteudo>
            <Opcoes>
                <p>Hábitos</p> 
                <p>Histórico</p>
            </Opcoes>
            <Barra>
                <Link to="/hoje">
                    <CircularProgressbar styles={buildStyles({
                    pathColor: `#ffffff`,
                    trailColor: "transparent",
                    textColor:"#ffffff",
                    textSize: "18px",
                    strokeLinecap: 'round',
                    pathTransitionDuration: 1.2
                    })}
                    value={setProgresso}
                    text="Hoje"
                    />
                </Link>
            </Barra>  
        </Conteudo>
    );
}