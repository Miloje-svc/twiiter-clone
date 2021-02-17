import styled from 'styled-components'

const Container = styled.section`
  background-color:#15181C;
  border-radius:1rem;
  width:100%;
  margin:1rem 0 0.5rem 0;
  overflow:hidden;
`

const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem;
  border-bottom:1px solid #2F3336;
`

const HeaderTitle = styled.h3`
  color:white;
  font-size:1rem;
  font-weight:900;
`


const Suggestion = styled.div`
  width: 100%;
  padding:1rem;
  border-bottom:1px solid #2F3336;
  display:flex;
  align-items: center;
  cursor:pointer;


  &:hover {
    background-color:#1C1F23;
  }
`

const User = styled.div`
  flex:1;
  margin-left:0.5rem;
`

const UserName = styled.h3`
  color:white;
  font-size:1rem;
  fon-weight:500;
  margin-bottom:0.2rem;
`

const UserEmail = styled.p`
  color:#6E767D;
  font-size:0.9rem;
  font-weight:500;
`

const FollowButton = styled.button`
  cursor:pointer;
  outline:none;
  height:30px;
  width:70px;
  background-color: transparent;
  color:#1DA0F0;
  border:1px solid #1DA0f0;
  border-radius:999px;

  &:hover {
    background-color: #1C2C38;
  }
`

const Footer = styled.footer`
  width:100%;
  padding:1rem;
  cursor:pointer;

  &:hover {
    background-color:#1C1F23;
  }
`

const FooterTitle = styled.p`
  color:#1C99E5;
`

export {
  Container,
  Header,
  HeaderTitle,
  Suggestion,
  User,
  UserName,
  UserEmail,
  FollowButton,
  Footer,
  FooterTitle,
}