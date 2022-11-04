import styled from "styled-components";
import theme from "../../global/themes";

export const SolidButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
padding: 8px 16px;
gap: 8px;
width: 282px;
height: 55px;
background: ${theme.colors.primary};
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 66px;
cursor: pointer;

@media (max-width: 1024px) {
    height: 45px;
    width: 210px;

    img {
        width: 25px;
        height: 25px;
    }
    }
`

export const Text = styled.span`
font-style: normal;
font-weight: 600;
font-size: 17px;
color: ${theme.colors.white};

@media (max-width: 1024px) {
    font-size: 12px;
    }

`