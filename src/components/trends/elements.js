import styled from 'styled-components'

const Container = styled.section`
  background-color:#15181C;
  border-radius:1rem;
  width:100%;
  margin:0.5rem 0;
  overflow:hidden;
`

const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem;
  border-bottom:1px solid #2F3336;

  .MuiSvgIcon-root {
    cursor:pointer;
    color:#1C99E5;
   }
`

const HeaderTitle = styled.h3`
  color:white;
  font-size:1rem;
  font-weight:900;
`

const Trend = styled.div`
  width: 100%;
  padding:1rem;
  border-bottom:1px solid #2F3336;
  display:flex;
  justify-content:space-between;
  cursor:pointer;

  .MuiSvgIcon-root{
    color:#6E767D;
  }

  &:hover {
    background-color:#1C1F23;
  }
`

const TrendContent = styled.div`

`

const TrendTitle = styled.h3`
  color:white;
  margin-bottom:0.4rem;
`

const TrendTweets = styled.p`
  color:#5A6166;
  font-size:0.9rem;
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
  TrendTitle,
  TrendContent,
  TrendTweets,
  Trend,
  Footer,
  FooterTitle,
}