import { Center, VStack, Wrap, useDisclosure } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Card, HeadContent, SearchBar, EmptyPlaceHolderCard, GoogleHeading, AddOrEditModal } from '../components'
import { getData } from '../utils'

export default function Home() {
  const [toUpdate, setToUpdate] = useState()
  const [openedCardIndex, setOpenedCardIndex] = useState(-1)
  const [cardData, setCardData] = useState(getData())
  const { isOpen, onOpen, onClose } = useDisclosure()
  // useEffect(() => {
  //   setCardData(getData() || [])
  // }, [])
  useEffect(() => {
    if (toUpdate) {
      setCardData(getData())
      setToUpdate(false)
    }
  }, [toUpdate])

  const modalProps = {
    isOpen,
    onClose,
    href: openedCardIndex === -1 ? '' : cardData[openedCardIndex].href,
    text: openedCardIndex === -1 ? '' : cardData[openedCardIndex].text,
    index: openedCardIndex === -1 ? -1 : openedCardIndex,
    setToUpdate,
  }
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
                <Card key={i + ''} {...c} index={i} onOpen={onOpen} setOpenedCardIndex={setOpenedCardIndex} />
              ))}
            <Card onOpen={onOpen} setOpenedCardIndex={setOpenedCardIndex} />
            <FormatPlaceholder />
          </Wrap>
        </VStack>
      </Center>
      <AddOrEditModal {...modalProps} />
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

// export async function getInitialProps() {
//   return {
//     props: {
//       cardData: await getData(),
//     },
//   }
// }
