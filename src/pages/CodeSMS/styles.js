import styled from "styled-components";
import background from '../../assets/Desktop2.png'
import backgroundMobile from '../../assets/Mobile2.png'
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
    margin-bottom: 80px;
`

export const TextInformation = styled.span`
    margin-top: 30px;
    width: 70%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: ${theme.colors.grey};
`
export const ContainerInput = styled.div`
    margin-top: 30px;
`