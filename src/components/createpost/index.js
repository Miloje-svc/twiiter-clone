import 'emoji-mart/css/emoji-mart.css'
import { db, storage } from '../../firebase'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { Avatar } from '@material-ui/core'
import { Picker } from 'emoji-mart'
import {
  Container,
  Form,
  FormInput,
  FormIcons,
  FormOptions,
  ImageContainer,
  Tweet,
  FileLabel,
  Image,
  CloseIconContainer
} from './elements'
import {
  LibraryIcon,
  GifIcon,
  PollIcon,
  SmileIcon,
  ScheduleIcon,
} from '../../assets/icons'
import CloseIcon from '@material-ui/icons/Close'

const CreatePost = () => {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')
  const [fileUrl, setFileUrl] = useState('')

  const addEmoji = e => {
    setInput(state => state += e.native)
  }

  const onSubmit = e => {
    e.preventDefault()

    db.collection("posts")
      .add({
        id: uuid(),
        username: "",
        avatar: "",
        message: input,
        image: fileUrl,
        comments: 0,
        likes: 0,
        shares: 0,
        retweets: 0,
      })

    setInput('')
    setFileUrl('')
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  return (
    <Container>
      <Avatar src="https://instagram.fbeg10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73398052_473606633258578_3890054899072761856_n.jpg?_nc_ht=instagram.fbeg10-1.fna.fbcdn.net&_nc_ohc=-hI4wRSmWFgAX8Zhyg4&tp=1&oh=e692e70d86667566447deda478f74742&oe=6053C512" />

      <Form onSubmit={onSubmit}>
        <FormInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's happening?" />

        {fileUrl !== "" && (
          <ImageContainer>
            <Image src={fileUrl} />
            <CloseIconContainer>
              <CloseIcon onClick={() => setFileUrl('')} />
            </CloseIconContainer>
          </ImageContainer>
        )}

        <FormOptions>
          <FormIcons>
            <FileLabel>
              <LibraryIcon />
              <input onChange={onFileChange} type="file" style={{ width: 0, height: 0 }} />
            </FileLabel>
            <GifIcon />
            <PollIcon />
            <SmileIcon onClick={() => setShow(s => !s)} />
            <ScheduleIcon />
            {show && (
              <Picker
                onSelect={addEmoji}
                style={{ position: 'absolute', top: 50, left: 0 }}
                theme={"dark"} />
            )}
          </FormIcons>
          <Tweet disabled={input === ''} type="submit">Tweet</Tweet>
        </FormOptions>
      </Form>
    </Container>
  )
}

export default CreatePost