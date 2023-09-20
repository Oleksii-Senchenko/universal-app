// import styled from '@emotion/styled';

// export const HeaderBGC = styled.header`
//   background-color: #333;
//   padding: 15px;
//   display: flex;
//   justify-content: space-between
// `;

// export const TitleText = styled.h1`
//   background: linear-gradient(to right, #E5E5E5, #D3D3D3);
//   -webkit-background-clip: text;
//   background-clip: text; 
//   color: transparent;
//   font-weight: bold;
//   text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.5);
// `;
// export const LogOut = styled.button`

//   background-color: red;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: bold;
//   display: inline-block;
//   transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
//   &:hover {
//     transform: scale(0.95);
//     box-shadow: 10px 13px 16px rgba(0, 0, 0, 0.3); 
//   }
// `;
import styled from '@emotion/styled';

export const HeaderBGC = styled.header`
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Выравнивание по вертикали */
`;

export const TitleText = styled.h1`
  background: linear-gradient(to right, #E5E5E5, #D3D3D3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.5);
`;

export const LogOut = styled.button`
  background-color: #E5E5E5; /* Цвет фона кнопки, соответствующий фону заголовка */
  color: #333; /* Цвет текста кнопки, соответствующий фону заголовка */
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