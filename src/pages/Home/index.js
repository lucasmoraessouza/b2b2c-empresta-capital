import * as S from './styles'
import steps from '../../assets/Steps1.png'
import { Button } from '../../components/Button'

export function Home() {
    return (
        <S.Container >
            <S.Box >
                <S.ContainerSteps>
                    <img src={steps} alt="" />
                </S.ContainerSteps>
                <S.Title>Para continuar, por favor insira as informações abaixo:</S.Title>
                <S.Form>

                    <S.Input placeholder='seu nome (obrigatório)' />
                    <S.Input placeholder='seu telefone celular (obrigatório)' />
                    <S.Input placeholder='seu e-mail (obrigatório)' />
                    <S.Input placeholder='seu cpf (obrigatório)' />
                    <S.TermsOfUse>
                        <S.Checkbox />
                        <S.TextInformation>Informo que li e concordo com os <S.AlertText>Termos</S.AlertText> e <S.AlertText>Condições</S.AlertText>.</S.TextInformation>
                    </S.TermsOfUse>
                </S.Form>
                <Button text="Continuar" />
            </S.Box>
        </S.Container>
    )
}