import styled from "styled-components";

const colors = [

    {name: 'Reaction', color: 'var(--light-red)'},
    {name: 'Memory', color: 'var(--orangey-yellow)'},
    {name: 'Verbal', color: 'var(--green-teal)'},
    {name: 'Visual', color: 'var(--cobalt-blue)'},

]

export const SummaryItem = styled.div`
    width: 100%;
    height: 3rem;
    margin: 10px 0;
    position: relative;
    font-weight: 700;

    .bg{        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: ${({desc}) => 
            colors.map(color => desc === color.name && color.color)
        };
        opacity: .1;
        z-index: -1;
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        width: 100%;
        height: 100%;
    }

    .info{
        display: flex;
        gap: 20px;
        color: ${({desc}) => 
            colors.map(color => color.name === desc && color.color) 
        }
    }

    .score-item p{
        color: var(--dark-gray-blue)
    }
    .score-item p span{
        color: #aaa
    }
    .img{
        max-width: 20px;
        max-height: 20px;
        background-color: #000;
    }
`