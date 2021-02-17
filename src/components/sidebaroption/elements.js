import styled from 'styled-components'

const Text = styled.p`
  font-size:1.3rem;
  font-weight:700;
  margin-left:1rem;

  @media(max-width:1280px) {
    display:none !important;
  }
`

const Container = styled.section`
  display:flex;
  align-items: center;
  border-radius:999px;
  width:fit-content;
  cursor:pointer;
  padding:0.5rem 1rem;
  color:white;
  margin:0.5rem 0;

  @media(max-width:1280px) {
    width:50px;
    height:50px;
    border-radius:50%;
    display:grid;
    place-items:center;
    padding:0;
    margin:0.5rem 0;
  }

  &:hover & ${Text} {
    color:#1DA1F2;  
  }
`

export {
  Container,
  Text
}