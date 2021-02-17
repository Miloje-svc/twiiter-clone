import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  background-color:black;
  border:1px solid #2F3336;
  padding:1rem;
  display:flex;
  cursor:pointer;
`

const Content = styled.div`
  margin-left:1rem;
  width:100%;
`

const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  min-width:100%;
  margin-bottom:1rem;

  .MuiSvgIcon-root{
    color:#6E767D;
    cursor:pointer;
  }
`

const User = styled.div`
  flex:1;
`

const UserName = styled.h3`
  color:white;
  font-size:1rem;
  margin-bottom:0.3rem;
  font-weight:700;
`

const Message = styled.p`
  color:white;
  font-size:0.9rem;
  font-weight:500;
`

const Image = styled.img`
  width:100%;
  display:block;
  border-radius:1rem;
  margin:0 1rem 1rem 0;
  object-fit:cover;
`

const Options = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
`

export {
  Container,
  Content,
  Header,
  User,
  UserName,
  Image,
  Message,
  Options,
}