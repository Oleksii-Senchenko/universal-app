import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const DivBox = styled.div`
  max-width: 700px;
  text-transform: none;
  text-align: center; 
  margin: auto;
  margin-bottom: 100px;
   font-weight: bold;
   font-size: large;
   margin-top: 50px;


`;
export const LoginLink = styled(NavLink)` display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
   text-decoration: none; 
 


  &:hover{
     text-decoration: underline; 
  }
`
export const GetStart = styled.button`
  
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  
}

  `

export const Description = styled.p`
font-size: 16px; 
  line-height: 1.5; 
  margin-bottom: 20px
  `
export const DeskContent = styled.div`
margin-bottom: 200px;
  `