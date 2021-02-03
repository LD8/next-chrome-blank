import React, { useState } from 'react'
import { Text, WrapItem, Avatar, Button, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'

const Card = ({ href, text, index = -1, setOpenedCardIndex, avatarName = 'an icon' }) => {
  const [hovered, setHovered] = useState(false)
  let handleOpen = () => {
    // console.log('setOpenedCardIndex: ', index)
    setOpenedCardIndex(index)
  }
  return href ? (
    <WrapItem>
      <LinkBox
        as="section"
        boxSize="120px"
        maxW="sm"
        position="relative"
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        rounded="md"
        bg="gray.700"
        _hover={{ backgroundColor: 'gray.600', boxShadow: '0 0px 8px black' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setTimeout(() => setHovered(false), 3000)}
      >
        <Avatar
          src={`${href}favicon.ico`}
          name={avatarName}
          boxSize="50px"
          my={2}
          p="3px"
          bg="gray.400"
          boxShadow={hovered ? '0 0 20px black' : ''}
        />
        <Text maxW="100px" fontSize="14px" textAlign="center" isTruncated>
          <LinkOverlay href={href} isExternal>
            {text}
          </LinkOverlay>
        </Text>
        <HamburgerIcon
          w={4}
          h={4}
          p="3px"
          color="gray.500"
          position="absolute"
          top="5px"
          right="5px"
          onClick={handleOpen}
          cursor="pointer"
          style={{ display: hovered ? 'block' : 'none' }}
          _hover={{ color: 'white' }}
        />
      </LinkBox>
    </WrapItem>
  ) : (
    <WrapItem>
      <Button onClick={handleOpen} boxSize="120px" bg="gray.600" d="flex" flexDir="column">
        <Text maxW="100px" textAlign="center" isTruncated>
          <AddIcon />
        </Text>
      </Button>
    </WrapItem>
  )
}

export default Card
