import {
  Container,
  Header,
  HeaderTitle,
  TrendTitle,
  TrendTweets,
  TrendContent,
  Trend,
  Footer,
  FooterTitle,
} from './elements'
import SettingsIcon from '@material-ui/icons/Settings'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const Trends = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Trends for you</HeaderTitle>
        <SettingsIcon />
      </Header>

      <Trend>
        <TrendContent>
          <TrendTitle>jeste</TrendTitle>
          <TrendTweets>6,634 Tweets</TrendTweets>
        </TrendContent>
        <MoreHorizIcon />
      </Trend>
      <Trend>
        <TrendContent>
          <TrendTitle>jeste</TrendTitle>
          <TrendTweets>6,634 Tweets</TrendTweets>
        </TrendContent>
        <MoreHorizIcon />
      </Trend>
      <Trend>
        <TrendContent>
          <TrendTitle>jeste</TrendTitle>
          <TrendTweets>6,634 Tweets</TrendTweets>
        </TrendContent>
        <MoreHorizIcon />
      </Trend>

      <Footer>
        <FooterTitle>Show More</FooterTitle>
      </Footer>
    </Container>
  )
}

export default Trends