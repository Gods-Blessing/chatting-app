import styled from "styled-components"

export const Maincontainer = styled.div`
    border-right: 1px solid gray;
    flex: 1;
    padding: 5px;
`;


export const People = styled.div`
    padding: 10px 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background-color: #b1f5ae;
    }
`;


export const Imageofpeople = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;