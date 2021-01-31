import { Center, VStack, Wrap } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Card, HeadContent, SearchBar, EmptyPlaceHolderCard, GoogleHeading } from '../components'
import { getData } from '../utils'

export default function Home() {
  const [cardData, setCardData] = useState([
    { href: 'https://www.baidu.com/', text: '百度' },
    { href: 'https://www.lagou.com/', text: '拉勾' },
    { href: 'https://www.douban.com/', text: '豆瓣' },
  ])
  return (
    <>
      <HeadContent text="New Tab" />
      <Center h="100vh" maxW="800px" w="100%" mx="auto" pb={20}>
        <VStack>
          <GoogleHeading />
          <SearchBar />
          <Wrap spacing="20px" justify="center">
            {cardData &&
              cardData.map((c, i) => (
                <Card key={i + ''} {...c} index={i} setCardData={setCardData} cardData={cardData} />
              ))}
            <Card setCardData={setCardData} cardData={cardData} />
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
    <EmptyPlaceHolderCard />
  </>
)

// export function getServerSideProps() {
//   return {
//     props: {
//       cardData: getData(),
//     },
//   }
// }
