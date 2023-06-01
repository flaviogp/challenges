
import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    width: 600px;
    height: 450px;
    border-radius: 20px;
    box-shadow: 5px 5px 25px rgba(0,0,0, 0.5);

    @media(max-width: 550px){
        flex-direction: column;
        width: auto;
        height: 100%;
    }
`;