import styled from "@emotion/styled";


export const DivContainer = styled.div`
background-color: #f0f0f0;`

export const TitleTexts = styled.h1`
 font-size: 24px;
    color: #333;
    text-align: center; 
    padding: 20px; 
`

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  /* position: relative; */
  margin-bottom: 10px;
  display: flex;
flex-direction: column;
`;

export const Inputs = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  &:focus{
      border-color: red;
      border-inline-width: 3px;
      transition: all 200ms;
  }
 
`;
export const Submit = styled.button`


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
export const Labels = styled.label`
  top: 10px;
  left: 10px;
  pointer-events: none;
  font-size: 16px;
  color: #666;
`;