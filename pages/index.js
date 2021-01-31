import { Center, VStack, Wrap } from '@chakra-ui/react'
import { Card, HeadContent, SearchBar, EmptyPlaceHolderCard, GoogleHeading } from '../components'

const cardData = [
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: 'Google' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
  { href: 'https://www.baidu.com/', imgSrc: '/favicon.ico', text: '百度' },
]

export default function Home() {
  return (
    <>
      <HeadContent text="New Tab" />
      <Center h="100vh" maxW="800px" w="100%" mx="auto" pb={15}>
        <VStack>
          <GoogleHeading />
          <SearchBar />
          <Wrap spacing="20px" justify="center">
            {cardData && cardData.map((c, i) => <Card key={i + ''} {...c} />)}
            <Card />
            <FormatPlaceholder />
          </Wrap>
        </VStack>
      </Center>
    </>
  )
}

const FormatPlaceholder = () => (
  <>
    <EmptyPlaceHolderCard />
    <EmptyPlaceHolderCard />
    <EmptyPlaceHolderCard />
    <EmptyPlaceHolderCard />
  </>
)
