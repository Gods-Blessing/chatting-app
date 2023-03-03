import styled from "styled-components"
 
 
export const Nav = styled.div`
    background-Color: #65f78d;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    gap: 10px;
    padding: 15px;
    justify-content: space-between;
    `;


export const Linkss = styled.div`
    width: 50%;
    color: green;
    display: flex;
    justify-content: space-around;
`; 

export const Search = styled.input`
    width: 50%;
    background-color: rgba(22,22,22,0.2);
    padding: 8px;
    border-radius: 20px;
    border: none;
    margin-right: 20px;
    color: white;
    font-weight: 600;

    ::placeholder{
        color: white;
    }
`;

export const Img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`