import {
  Container,
  Text
} from './elements'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SidebarOption = ({ text, icon: Component, route }) => {
  const history = useHistory()
  const pendingColor = history.location.pathname === route ? '#1DA1F2' : "white"
  const [color, setColor] = useState(pendingColor)

  return (
    <Link style={{ textDecoration: "none" }} to={route}>
      <Container
        onMouseLeave={() => setColor(pendingColor)}
        onMouseEnter={() => setColor("#1DA1F2")}
        style={{ color: color }}>
        <Component color={color} />
        <Text>{text}</Text>
      </Container>
    </Link>
  )
}

export default SidebarOption