import { v4 as uuid } from 'uuid'

import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  BookmarkIcon,
  ProfileIcon,
  MoreIcon,
} from '../index'

const options = [
  {
    id: uuid(),
    route: "/",
    icon: HomeIcon,
    text: 'Home',
  },
  {
    id: uuid(),
    route: "/explore",
    icon: ExploreIcon,
    text: 'Explore',
  },
  {
    id: uuid(),
    route: "/notifications",
    icon: NotificationIcon,
    text: 'Notifications',
  },
  {
    id: uuid(),
    route: "/messages",
    icon: MessageIcon,
    text: 'Messages',
  },
  {
    id: uuid(),
    route: "/bookmarks",
    icon: BookmarkIcon,
    text: 'Bookmarks',
  },
  {
    id: uuid(),
    route: "/profile",
    icon: ProfileIcon,
    text: 'Profile',
  },
  {
    id: uuid(),
    route: "/more",
    icon: MoreIcon,
    text: 'More',
  },
]

export default options