import styled from "styled-components"
import { LoadingButton } from '@mui/lab';
import { FC } from "react";

type Props = {
    name: string
}

export const AuthButton:FC<Props> = (props) =>{
    return(
        <AuthButtonStyle variant="contained">
           {props.name}
        </AuthButtonStyle>
    )
}


const AuthButtonStyle = styled(LoadingButton)`
&&{
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
    color: ${props => props.theme.background};
    background: ${props => props.theme.text};
    border-radius: ${props => props.theme.Input_radius};
    width: 100%;
    height: 45px;
    padding: 0.4rem;
    &:hover{
        background: ${props => props.theme.text};
    }
}
`