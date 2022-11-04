import * as S from './styles'
import IconSuccess from '../../assets/IconSuccess.png'
import { Button } from '../../components/Button'
import WhatsappIcon from '../../assets/WhatsappIcon.png'

export function Solicitation() {

    return (
        <S.Container >
            <S.Box >
                {/* <S.ContainerSteps> */}
                <img src={IconSuccess} alt="" width={85} height={85} />
                {/* </S.ContainerSteps> */}
                <S.Title>Cliente, sua solicitação foi enviada com sucesso.</S.Title>

                <S.ObservationText>Muito em breve um de nossos
                    consultores entrará em
                    contato com você, obrigado!</S.ObservationText>
                <Button text="Falar com o atendimento" icon={WhatsappIcon} />
            </S.Box>
        </S.Container>
    )
}