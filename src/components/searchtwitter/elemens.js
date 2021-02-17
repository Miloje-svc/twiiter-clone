import styled from 'styled-components'

const Container = styled.section`
  background-color: #202327;
  width: 100%;
  height:40px;
  border-radius:999px;
  padding:0.5rem 1rem;
  margin:0.5rem 0 1rem 0;
  display:flex;
  align-items: center;
  color: #60666D;
`

const Input = styled.input`
  flex:1;
  color:white;
  width:100%;
  height:100%;
  outline:none;
  border:none;
  padding:0 1rem;
  background-color:transparent;

  &::placeholder {
    color:#60666D;
    font-size:1rem;
  }
`

export {
  Container,
  Input,
}