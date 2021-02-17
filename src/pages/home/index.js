import {
  Container,
  ContainerLeft,
  ContainerRight,
  Header,
  HeaderTitle,
  Div
} from './Elements'
import {
  CreatePost,
  Trends,
  Posts,
  Suggestions,
  Layout,
  SearchTwitter
} from '../../components'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const Home = () => {
  return (
    <Container>
      <Layout>
        <ContainerLeft>
          <Header>
            <HeaderTitle>Home</HeaderTitle>
            <StarBorderIcon />
          </Header>
          <Div>
            <CreatePost />
            <Posts />
          </Div>
        </ContainerLeft>

        <ContainerRight>
          <SearchTwitter />
          <Trends />
          <Suggestions />
        </ContainerRight>
      </Layout>
    </Container>
  )
}

export default Home