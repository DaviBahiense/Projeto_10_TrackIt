import {ConteudoNovoHabito, NovaInfo, Botao,Semana, Dia, Cancelar, Salvar} from "./style"

export default function NovoHabito(){

    const semana = ["D", "S", "T" ,"Q", "Q", "S", "S"]

    return(
        <ConteudoNovoHabito>
            <NovaInfo>
                <Botao >
                    <input placeholder="nome do hábito..."/> 
                </Botao>
                <Semana>
                    {semana.map((dia)=> <Dia>{dia}</Dia>)}
                </Semana>
                <Botao position="flex-end">
                    <Cancelar>Cancelar</Cancelar>
                    <Salvar>Salvar</Salvar>
                </Botao>
            </NovaInfo>
        </ConteudoNovoHabito>
    )
}