
import styled from "styled-components";


export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 300px;
    height: 100%;
    background-color: tranparent;
    border-radius: 20px;
    padding: 30px;
    
    h2{
        color: var(--dark-gray-blue)
    }

    .summary-items{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: max-content;
        margin: 20px 0;
    }


    button{
        width: 100%;
        padding: 15px;
        border-radius: 25px;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        color: var(--white);
        background-color: var(--dark-gray-blue) ;
        transition: .4s;
    }
    button:hover {
        cursor: pointer;
        background: linear-gradient(var(--light-slate-blue),var(--light-royal-blue)) ;
    }
`