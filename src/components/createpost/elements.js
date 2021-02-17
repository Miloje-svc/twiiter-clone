import styled from 'styled-components'

const Container = styled.section`
  border:1px solid #2F3336;
  width:100%;
  padding:1rem;
  display:flex;

  .MuiAvatar-root {
    width:50px;
    height:50px;
    cursor:pointer;
  }
`

const Form = styled.form`
  flex:1;
  margin-left:1rem;
`

const Image = styled.img`
  width:100%;
  display:block;
  border-radius:1rem;
  margin:0 1rem 1rem 0;
  object-fit:cover;
`

const FormInput = styled.input`
  outline: none;
  border: none;
  color:white;
  background-color: transparent;
  width: 100%;
  height:50px;

  &::placeholder {
    color:#555B60;
    font-size:1.2rem;
  }
`

const FormIcons = styled.div`
  flex:1;
  position:relative;

  svg{
    color: #1DA1F2;
    margin-right:1rem;
    cursor:pointer;
  }
`

const FormOptions = styled.div`
  border-top:1px solid #2F3336;
  min-width:100%;
  padding:1rem 0 0 0;
  display:flex;
  align-items: center;
`

const Tweet = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width:100px;
  color:white;
  background-color:#1DA1F2;
  padding:0.7rem 0;
  border-radius:999px;
`

const FileLabel = styled.label`
  flex:1;
  height:40px;
  border-radius:0.5rem;
  cursor:pointer;
  background-color:transparent;
`


const ImageContainer = styled.div`
  width:100%;
  position:relative;
`

const CloseIconContainer = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  display:grid;
  place-items:center;
  cursor:pointer;
  position:absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  z-index: 100;
  background-color:black;
`

export {
  Container,
  Form,
  FormInput,
  FormIcons,
  FormOptions,
  Tweet,
  FileLabel,
  Image,
  ImageContainer,
  CloseIconContainer
}