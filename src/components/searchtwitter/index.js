import {
  Container,
  Input,
} from './elemens'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'

const SearchTwitter = () => {
  return (
    <Container>
      <SearchRoundedIcon />
      <Input placeholder="Search Twitter" />
    </Container>
  )
}

export default SearchTwitter