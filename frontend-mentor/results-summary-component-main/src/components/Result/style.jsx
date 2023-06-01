import styled from 'styled-components'


export const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 100%;
    background: linear-gradient(var(--light-slate-blue), var(--light-royal-blue));
    border-radius: 20px;
    padding: 30px;

    h2{
        color: var(--light-lavender)
    }
  
    p {
        color: var(--white);
        font-size: 2rem;
    }
    
    span{
        text-align: center;
        color: var(--light-lavender);
    }


`

export const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: linear-gradient(var(--violet-blue), var(--persian-blue));
    margin: 20px 0;

    p{
        color: var(--white);
        font-size: 4rem;
        font-weight: 800;
    }

    @media(max-width: 550px) {
        width: 8rem;
        height: 8rem;
    }
`

export const ResultInfo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;  
    
    p{
        margin-bottom: 15px;
    }  
`