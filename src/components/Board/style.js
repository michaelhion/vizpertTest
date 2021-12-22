import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   padding:30 px 0;
   height: calc(100% -80px); 

   @media screen and (max-width: 720px) {
      flex-direction:column
  }
`