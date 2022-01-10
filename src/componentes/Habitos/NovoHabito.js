import {ConteudoNovoHabito, NovaInfo, Botao,Semana, Dia, Cancelar, Salvar} from "./style"

export default function NovoHabito(){

    return(
        <ConteudoNovoHabito>
            <NovaInfo>
                <Botao >
                    <input placeholder="nome do hábito..."/> 
                </Botao>
                <Semana>
                    <Dia>D</Dia> <Dia>S</Dia> <Dia>T</Dia> <Dia>Q</Dia> <Dia>Q</Dia> <Dia>S</Dia> <Dia>S</Dia>
                </Semana>
                <Botao position="flex-end">
                    <Cancelar>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
                </Botao>
            </NovaInfo>
        </ConteudoNovoHabito>
    )
}