import * as S from './styles'
import steps from '../../assets/Steps4.png'
import { Button } from '../../components/Button'

export function ValueAntecipation() {

    return (
        <S.Container >
            <S.Box >
                <S.ContainerSteps>
                    <img src={steps} alt="" />
                </S.ContainerSteps>
                <S.Title><S.TextBold>Cliente,</S.TextBold> seu valor de antecipação será de:</S.Title>
                <S.ContainerValue>
                    <S.IconMoney>R$</S.IconMoney>
                    <S.TextInformation>13.231,23</S.TextInformation>
                </S.ContainerValue>
                <S.InformationText>Esse é o valor total para antecipação do seu aluguel no total de 6 meses.</S.InformationText>
                <S.ObservationText>(*) os valores acima podem sofrer uma pequena variação conforme o dia de antecipação dos valores</S.ObservationText>
                <Button text="Solicitar antecipação" />
                <S.AlertText>Nova simulação.</S.AlertText>

            </S.Box>
        </S.Container>
    )
}