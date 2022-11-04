import * as S from './styles'
import steps from '../../assets/Steps2.png'
import { Button } from '../../components/Button'
import OtpInput from 'react-otp-input'

export function CodeSMS() {
    return (
        <S.Container >
            <S.Box >
                <S.ContainerSteps>
                    <img src={steps} alt="" />
                </S.ContainerSteps>
                <S.Title>Para confirmar seus dados, nós enviamos um código via SMS</S.Title>
                <S.TextInformation>Para continuar, insira  o código de 4 dígitos recebido via SMS em seu número de celular</S.TextInformation>
                <S.Form>
                    <S.ContainerInput>
                        <OtpInput
                            isInputNum={true}
                            numInputs={4}
                            separator={" "}
                            inputStyle={{
                                width: "55px",
                                marginLeft: "10px",
                                marginRight: "10px",
                                height: "65px",
                                fontSize: "2rem",
                                border: "1px solid #8F8F8F",
                                backgroundColor: '#DEDEDE'
                            }}
                        />
                    </S.ContainerInput>
                </S.Form>
                <Button text="Continuar" />
            </S.Box>
        </S.Container>
    )
}