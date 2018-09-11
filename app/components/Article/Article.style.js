import styled from 'styled-components';

export const TileContainer = styled.div`{
    background: #fff;
    position: relative;
    border-radius: 6px;
    margin: 6px;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;
    color: #231f20;
    width: 540px;
    
}`

export const ImageContainer = styled.div`{
    position: relative;
    overflow: hidden;
}`
export const Image = styled.img`{
    transition: transform .5s cubic-bezier(.22,.89,.57,1),-webkit-transform .5s cubic-bezier(.22,.89,.57,1);
    
    &:hover{
        transform: scale(1.5);
    }
}`