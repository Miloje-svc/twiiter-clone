import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width:265px;
  height: 100vh;
  display:flex;
  flex-direction: column;
  padding:10px;

  @media(max-width:1280px) {
    align-items:center;
    width:80px !important;
  }
`

const Header = styled.div`
  color:#D9D9D9;
  width:50px;
  height:50px;
  border-radius:50%;
  cursor:pointer;
  display:grid;
  place-items:center;

  .MuiSvgIcon-root {
    width:30px !important;
    height:30px !important;
  }
`

const SidebarOptions = styled.div`
  flex:1;
`

const User = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  border-radius:999px;
  cursor:pointer;
  padding:10px;
  color:white;

  &:hover {
    background-color: #1DA1F2;
  }

  @media(max-width:1280px) {
    width:60px;

  .MuiSvgIcon-root{
      display:none !important;
    }
  }
`

const UserContent = styled.div`
  flex: 100%;
  margin-left:0.5rem;

  @media(max-width:1280px) {
    display:none !important;
  }
`

const UserName = styled.h3`
  color:white;
  font-size:1rem;
  font-weight:700;
`

const UserEmail = styled.p`
  color:#555B60;
  font-size:0.8rem;
`

const TweetButton = styled.button`
  outline:none;
  border:none;
  width:100%;
  padding:0.8rem 0;
  color:white;
  background-color:#1B94DF;
  border-radius:999px;
  cursor:pointer;
  margin-top:1rem;
  font-weight:500;
  font-size:1.2rem;

  &:hover {
    opacity:0.9;
  }

  @media(max-width:1280px) {
    display:none !important;
  }
`

const TweetIconContainer = styled.div`
  width:40px;
  height:40px;
  cursor:pointer;
  background-color:#1B94DF;
  border-radius:50%;
  display:none;
  margin:1rem auto;

  @media(max-width:1280px) {
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

export {
  Container,
  Header,
  SidebarOptions,
  User,
  UserContent,
  UserName,
  UserEmail,
  TweetIconContainer,
  TweetButton,
}