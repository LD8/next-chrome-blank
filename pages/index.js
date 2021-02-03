import { Center, VStack, Wrap } from '@chakra-ui/react'
import React, { useState, useEffect, useReducer } from 'react'
import { Card, HeadContent, SearchBar, EmptyPlaceHolderCard, GoogleHeading, AddOrEditModal } from '../components'
import { getData, setData } from '../utils'

const reducer = (state, action) => {
  const newState = [...state]
  switch (action.type) {
    case 'add_card':
      newState.push(action.payload.datum)
      return newState
    case 'edit_card':
      newState.splice(action.payload.index, 1, action.payload.datum)
      return newState
    case 'del_card':
      newState.splice(action.payload.index, 1)
      return newState
    default:
      return state
  }
}

export default function Home() {
  const [cardData, dispatch] = useReducer(reducer, getData())
  const [openedCardIndex, setOpenedCardIndex] = useState(null)
  // console.log('cardData when rerendered: ', cardData)
  useEffect(() => {
    // 存入 localStorage 做持久化处理
    setData(cardData)
  }, [cardData])

  const modalProps = {
    dispatch,
    cardData,
    index: openedCardIndex,
    setOpenedCardIndex,
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
              cardData.map((c, i) => <Card key={i + ''} {...c} index={i} setOpenedCardIndex={setOpenedCardIndex} />)}
            <Card setOpenedCardIndex={setOpenedCardIndex} />
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
