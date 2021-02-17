import {
  Container,
  Content,
  Header,
  User,
  UserName,
  ImageContainer,
  Image,
  Message,
  Options,
} from './elements'
import { Avatar } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {
  ShareIcon,
  RetweetIcon,
  CommentIcon,
  HeartIcon,
} from '../../assets'

const Post = ({ post }) => {
  const {
    avatar,
    username,
    image,
    message,
  } = post

  return (
    <Container>
      <Avatar src={avatar} />

      <Content>
        <Header>
          <User>
            <UserName>{username}</UserName>
            <Message>{message}</Message>
          </User>
          <MoreHorizIcon />
        </Header>

        {image !== "" && (
          <Image src={image} />
        )}

        <Options>
          <CommentIcon />
          <RetweetIcon />
          <HeartIcon />
          <ShareIcon />
        </Options>
      </Content>
    </Container>
  )
}

export default Post