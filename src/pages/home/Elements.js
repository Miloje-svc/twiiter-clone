import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  height:100vh;
  overflow: hidden;
`

const ContainerLeft = styled.section`
  flex:0.65;
  max-width:600px;
  margin:0 auto;
`

const Div = styled.div`
  width:100%;
  overflow: scroll;
  padding-bottom: 3.5rem;
  height: 100%;
`

const ContainerRight = styled.section`
  flex:0.35;
  height: 100%;
`

const Header = styled.header`
  width:100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  border:1px solid #2F3336;
  padding:1rem;

  .MuiSvgIcon-root{
    color:#1DA1F2;
    cursor:pointer;
  }
`

const HeaderTitle = styled.h1`
  color:white;
`

export {
  Container,
  ContainerLeft,
  ContainerRight,
  Header,
  HeaderTitle,
  Div
}