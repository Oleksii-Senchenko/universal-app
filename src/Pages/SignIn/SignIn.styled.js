import styled from "@emotion/styled";

export const DivContainer = styled.div`
  background-color: rgba(240, 240, 240, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-radius: 35px
`;

export const TitleTexts = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const FormStyles = styled.form`
  max-width: 400px;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px; 
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Inputs = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  &:focus {
    border-color: red;
    border-width: 2px;
  }
`;

export const Submit = styled.button`
  width: 100%;
  padding: 10px;
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
`;

export const Labels = styled.label`
  font-size: 16px;
  color: #666;
`;
