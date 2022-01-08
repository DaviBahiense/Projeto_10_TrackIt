import Logo from "./miniLogo.png";
import {Conteudo, ImgCliente, LogoImg} from './style';

export default function Topo(){
    return(
        <Conteudo>
            <LogoImg src={Logo} />
            <ImgCliente src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFJ6gK5zHKWtBiAdlJlearXe4QKHVTDX9r7Zp6vU3TQAdf-vqcPQr8Ryyf0agywTtrG0&usqp=CAUg" />
        </Conteudo>
    );
}


