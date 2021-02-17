import {
  Container,
  Content
} from './elements'
import { Sidebar } from '../index'

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />

      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Layout