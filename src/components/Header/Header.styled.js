
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderBGC = styled.header`
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const TitleText = styled(NavLink)`
  background: linear-gradient(to right, #E5E5E5, #D3D3D3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.5);
`;
//ДЕЛАТЬ лишки в диве прозрачной формы
export const LogOut = styled.button`
  background-color: #E5E5E5; 
  color: #333; 
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  }
`;