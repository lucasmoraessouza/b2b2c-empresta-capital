import * as S from './styles'
import steps from '../../assets/Steps3.png'
import { styled } from '@mui/material/styles';
import { Button } from '../../components/Button'
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";

export function Informations() {
    const StyledTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))`
        & .MuiTooltip-tooltip {
          background:   rgba(0, 0, 0, 0.77);
          border-radius: 15px;
          margin-bottom: 20px;
          padding: 20px 10px;
        }
      `;
    return (
        <S.Container >
            <S.Box >
                <S.ContainerSteps>
                    <img src={steps} alt="" />
                </S.ContainerSteps>
                <S.Title>Para prosseguir com a simulação, insira as informações do seu aluguel:</S.Title>
                <S.Form>
                    <S.Input placeholder='CEP do imovel' />
                    <S.Input placeholder='Mensalidades que deseja antecipar' />
                    <S.ContainerRadioInput>
                        <S.Radius />
                        <S.Label>6 meses</S.Label>
                    </S.ContainerRadioInput>
                    <S.ContainerRadioInput>
                        <S.Radius />
                        <S.Label>12 meses</S.Label>
                    </S.ContainerRadioInput>
                    <S.ContainerInputAndTooltip>

                        <S.InputTooltip placeholder='Valor do aluguel' id="teste" />
                        <StyledTooltip title="Insira aqui o valor integral do aluguel atual." >
                            <IconButton >
                                <HelpIcon />
                            </IconButton>
                        </StyledTooltip>
                    </S.ContainerInputAndTooltip>
                </S.Form>
                <Button text="Continuar" />
            </S.Box>
        </S.Container>
    )
}