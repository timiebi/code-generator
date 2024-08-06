import styled from "styled-components";

export const ProfileMainStyle = styled.div``;

export const ProfileMainContainerStyle = styled.div`
   width: 90%;
   margin: 1rem auto;
`;

export const ProfileMainHeaderStyle = styled.div``;

export const ProfileImageName = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 2.4rem;
`;

export const ProfileNameContainer = styled.div`
   p {
      text-align: center;
   }
`;


export const ProfileListContainerStyle = styled.div`
margin-top: 2.5rem;
`

export const ProfileListMainDiv = styled.div`
.select_textField{
   /* height: 28px; */
  padding: 0.6rem 0.4rem 0.6rem 0.8rem;
  width: 100%;
  outline: none;
  border: 1px solid #1c323c;
  border-radius: ${(props) => props.theme.Input_radius};
  margin-top: 1.5rem;
}
div{
   margin-top: .85rem;
}
.listContents{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 1rem; */
    .icon_text{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        gap: 1.5rem;
    }
}
`

export const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1.5rem;
`;