import { options } from '../../assets'
import { Avatar } from '@material-ui/core'
import {
  Container,
  Header,
  SidebarOptions,
  User,
  UserContent,
  UserName,
  UserEmail,
  TweetIconContainer,
  TweetButton,
} from './elements'
import { TweetIcon } from '../../assets'
import SidebarOption from '../sidebaroption'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import TwitterIcon from '@material-ui/icons/Twitter'

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <TwitterIcon />
      </Header>

      <SidebarOptions>
        {options.map(option => (
          <SidebarOption
            key={option.id}
            route={option.route}
            icon={option.icon}
            text={option.text} />
        ))}
        <TweetIconContainer>
          <TweetIcon color={"white"} />
        </TweetIconContainer>
        <TweetButton>Tweet</TweetButton>
      </SidebarOptions>

      <User>
        <Avatar src="https://instagram.fbeg10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73398052_473606633258578_3890054899072761856_n.jpg?_nc_ht=instagram.fbeg10-1.fna.fbcdn.net&_nc_ohc=-hI4wRSmWFgAX8Zhyg4&tp=1&oh=e692e70d86667566447deda478f74742&oe=6053C512" />
        <UserContent>
          <UserName>Lemi</UserName>
          <UserEmail>miloje@gmail.com</UserEmail>
        </UserContent>
        <MoreHorizIcon />
      </User>
    </Container>
  )
}

export default Sidebar