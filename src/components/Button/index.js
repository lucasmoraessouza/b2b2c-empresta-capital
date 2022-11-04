import * as S from './styles'

export function Button({ text, icon }) {
    return (
        <S.SolidButton>
            {icon ? <img alt="icon" src={icon} /> : ""}
            <S.Text>
                {text}
            </S.Text>
        </S.SolidButton>
    )
}