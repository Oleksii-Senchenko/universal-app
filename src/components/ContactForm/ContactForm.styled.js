import styled from "@emotion/styled";

export const FormStyles = styled.form`
  max-width: 400px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const DivWrapper = styled.div`
 max-width: 400px;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
export const Inputs = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  &:focus {
    border-color: red;
    border-width: 2px;
  }
`;

export const Submit = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;