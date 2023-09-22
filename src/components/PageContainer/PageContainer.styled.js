import styled from "@emotion/styled";
import Immage from '../../immage/book-close-up_144627-34840.avif'
export const Container = styled.div`
 min-width: 1000px; 
  max-width: 1200px;
  margin: 0 auto; 
  padding: 20px; 
  background-color: #fff; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);  border-radius: 10px; 
  background-size: cover;
background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
    ),

    url(${Immage});
 

`