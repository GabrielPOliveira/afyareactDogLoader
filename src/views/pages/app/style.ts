import styled from "styled-components";

export const Container = styled.div` 
    width: 80%;
    margin: 0 auto;

    .content{
        & button{
            color: #fff;
            background: red;
            border: nome;
            font-size: 22px;
            border-radius: 12px;
            padding: 10px;
            cursor: pointer;
            transition: 0.5s;
            
             :hover{
                background: pink;
            }
        }
        
    }

`