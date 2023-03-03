import styled from "styled-components"

export const Chatinputdiv = styled.div`
    width: 76.9%;
    /* background-color: pink; */
    border-top: 1px solid gray;
    padding: 5px;
    position: fixed;
    bottom: 2px;
    display: flex;
    align-items: center;
`;

export const Iconss = styled.img`
    height: 30px;
    width: 30px;
    background-color: #c1f7be;
    padding: 5px;
    border-radius: 5px;
    margin: 0px 10px;
`;

export const Btn = styled.button`
    background-color: #c1f7be;
    border: none;
    border-left: 1px gray solid;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    :hover{
        background-color: #5cf553;
    }
`;

export const Chattting = styled.input`
    padding: 13px 10px;
    background: transparent;
    background-color: #c1f7be;
    border: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    font-weight: 600;
`;

export const MessageContainer = styled.div`
    /* background-color: orange; */
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: ${props => props.end ? "flex-end":"flex-start" };
`

export const Messsaged = styled.p`
    display: flex;
    justify-content: flex-end;
    z-index: 5;
    padding:5px 20px;
    background-color: #b7f55f;
    width: fit-content;
    border-radius: 20px;
`; 