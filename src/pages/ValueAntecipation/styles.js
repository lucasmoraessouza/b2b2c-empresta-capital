import styled from "styled-components";
import background from '../../assets/Desktop4.png'
import backgroundMobile from '../../assets/Mobile4.png'
import theme from '../../global/themes'

export const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1024px) {
    background-image: url(${backgroundMobile});
    background-size: cover;
    height: 100%;
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: flex-end
  }

`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    width: 664px;
    border-radius: 45px;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(35px);
    border-radius: 45px;
    position: relative;
    top: 120px;
    right: 150px;
    padding: 40px 0px;

    @media (max-width: 1024px) {
    width: 100%;
    max-width: 1024px;
    position: inherit;
    margin: 0px 20px 60px 20px;
  }
`

export const ContainerSteps = styled.div`
    @media (max-width: 1024px) {
        img {
            width: 300px;
        };
    }
`
export const Title = styled.span`
    color: ${theme.colors.secondary};
    font-weight: 900;
    font-size: 32px;
    padding: 20px 20px;

    @media (max-width: 1024px) {
    color: ${theme.colors.secondary};
    width: 80%;
    font-size: 20px;
    text-align: center;
  }
`

export const TextBold = styled.b`
    color: ${theme.colors.secondary};
    font-weight: 900;
    font-size: 32px;

    @media (max-width: 1024px) {
    color: ${theme.colors.secondary};
    width: 80%;
    font-size: 20px;
    text-align: center;
  }
`

export const Input = styled.input`
    margin-top: 10px;
    background: transparent;
    width: 100%;
    margin-right: 5px;
    padding: 5px 0px;
    margin-bottom: 20px;
    border: none;
    font-size: 22px;
    color: #777777;
    &:focus-visible {
      outline: none;
      border-bottom: 2px solid #777777;
    }
    &::placeholder {
      color: #777777;
    }
    @media (max-width: 1024px) {
    margin-top: 0px;
    font-size: 16px;
    }
`

export const InputTooltip = styled.input`
    margin-top: 10px;
    background: transparent;
    width: 100%;
    margin-right: 5px;
    padding: 5px 0px;
    margin-bottom: 20px;
    border: none;
    font-size: 22px;
    color: #777777;
    &:focus-visible {
      outline: none;
      border-bottom: 2px solid #777777;
    }
    &::placeholder {
      color: #777777;
    }
    @media (max-width: 1024px) {
    margin-bottom: 10px;
    font-size: 16px;
    }
`

export const ContainerInputAndTooltip = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const ContainerRadioInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    width:100%;
    margin-bottom: 10px;


`

export const Radius = styled.input.attrs({ type: 'radio' })` 
    width: 20px;
    height: 20px;
    background-color: #8F8F8F;
    border: 1px solid #8F8F8F;

    @media (max-width: 1024px) {
    width: 15px;
    height: 15px;
    }

`

export const Label = styled.span`
    color: ${theme.colors.grey};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    margin-top:10px;
    margin-bottom:10px;
    line-height: 27px;

    @media (max-width: 1024px) {
    font-size: 16px;
    margin-top:0px;
    margin-bottom:0px;
    }

`

export const Form = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px;
    margin-bottom: 80px;
`

export const ContainerValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const IconMoney = styled.span`
  font-family: 'Manrope';
    font-weight: 900;
    font-size: 30px;
    line-height: 70px;
    color: ${theme.colors.primary};
`

export const TextInformation = styled.span`
    font-family: 'Manrope';
    font-weight: 900;
    font-size: 60px;
    text-align: center;
    color: ${theme.colors.primary};

    @media (max-width: 1024px) {
      font-size: 50px;
      margin-top: 10px;
    }
`

export const InformationText = styled.span`
margin-top: 20px;
font-weight: 600;
font-size: 16px;
text-align: center;
color: #787878;

@media (max-width: 1024px) {
  margin-top: 0px;
    }
`

export const ObservationText = styled.span`
margin: 40px 0px;

width: 80%;
font-weight: 600;
font-size: 14px;
line-height: 19px;
color: #787878;

@media (max-width: 1024px) {
  width: 90%;
  margin: 20px 0px;
    }
`

export const AlertText = styled.span`
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    text-decoration: underline; 
    color: ${theme.colors.orange};
    cursor: pointer;
`