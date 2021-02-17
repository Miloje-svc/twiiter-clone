import {
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
} from './elements'
import { Avatar } from '@material-ui/core'

const Suggestions = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Who to follow</HeaderTitle>
      </Header>

      <Suggestion>
        <Avatar />
        <User>
          <UserName>Miloje Svicevic</UserName>
          <UserEmail>miloje@gmail.com</UserEmail>
        </User>
        <FollowButton>Follow</FollowButton>
      </Suggestion>

      <Suggestion>
        <Avatar />
        <User>
          <UserName>Djordje</UserName>
          <UserEmail>djordje@gmail.com</UserEmail>
        </User>
        <FollowButton>Follow</FollowButton>
      </Suggestion>

      <Suggestion>
        <Avatar />
        <User>
          <UserName>StefanNoob</UserName>
          <UserEmail>noob@gmail.com</UserEmail>
        </User>
        <FollowButton>Follow</FollowButton>
      </Suggestion>

      <Footer>
        <FooterTitle>Show more</FooterTitle>
      </Footer>
    </Container>
  )
}

export default Suggestions