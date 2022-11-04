import styled from "styled-components";
import background from '../../assets/Desktop5.png'
import backgroundMobile from '../../assets/Mobile5.png'
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

export const Title = styled.span`
    color: ${theme.colors.secondary};
    font-weight: 900;
    font-size: 32px;
    padding: 20px 20px;
    text-align: center;

    @media (max-width: 1024px) {
    color: ${theme.colors.secondary};
    width: 80%;
    font-size: 20px;
    text-align: center;
  }
`

export const ObservationText = styled.span`
  width: 80%;
  font-weight: 800;
  font-size: 22px;
  text-align: center;
  margin: 20px 0px 50px 0px;
  color: #333333;

@media (max-width: 1024px) {
  width: 70%;

  margin: 20px 0px;
  font-size: 18px;
  
  }
`