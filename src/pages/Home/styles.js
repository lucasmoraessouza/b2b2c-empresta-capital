import styled from "styled-components";
import background from '../../assets/Desktop1.png'
import backgroundMobile from '../../assets/Mobile1.png'
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
    color: ${theme.colors.primary};
    font-weight: 900;
    font-size: 42px;
    padding: 20px 20px;

    @media (max-width: 1024px) {
    color: ${theme.colors.primary};
    width: 75%;
    font-size: 20px;
    align-self: center;
  }

`
export const Form = styled.div`
width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px;
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

export const TermsOfUse = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })` 
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    background-color: #8F8F8F;
    border: 1px solid #8F8F8F;
`

export const TextInformation = styled.span`
    margin-left: 20px;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.grey};
`

export const AlertText = styled.span`
    font-weight: 500;
    font-size: 16px;
    text-decoration: underline; 
    color: ${theme.colors.orange};
`