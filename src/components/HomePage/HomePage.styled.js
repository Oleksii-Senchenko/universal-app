import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import myImg from '../../immage/pexels-pixabay-531880.jpg'
export const DivBox = styled.div`
  max-width: 700px;
  text-transform: none;
  text-align: center; 
  margin: auto;
   font-weight: bold;
   font-size: large;
   margin-top: 50px;


 background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${myImg});

`;
export const SigninLink = styled(NavLink)` display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
   text-decoration: none; 
 


  &:hover{
     text-decoration: underline; 
  }
`