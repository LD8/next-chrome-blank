import React, { useState } from 'react'
import { Link, Text, Center, WrapItem, Avatar, Button, useDisclosure } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import AddOrEditModal from './AddOrEditModal'

const Card = ({ href, text, index, setCardData, cardData, avatarName = 'an icon' }) => {
  const [hovered, setHover] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalProps = {
    isOpen,
    onClose,
    href,
    text,
    index,
    setCardData,
    cardData,
  }
  return (
    <>
      {href ? (
        <WrapItem position="relative">
          <Link href={href} isExternal>
            <Center
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setTimeout(() => setHover(false), 3000)}
              boxSize="120px"
              bg="gray.700"
              d="flex"
              flexDir="column"
              rounded="md"
              _hover={{ backgroundColor: 'gray.600', boxShadow: '0 0px 8px black' }}
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
                {text}
              </Text>
            </Center>
          </Link>
          <HamburgerIcon
            w={4}
            h={4}
            p="3px"
            color="gray.500"
            position="absolute"
            top="5px"
            right="5px"
            onClick={onOpen}
            cursor="pointer"
            style={{ display: hovered ? 'block' : 'none' }}
            _hover={{ color: 'white' }}
          />
        </WrapItem>
      ) : (
        <WrapItem>
          <Button onClick={onOpen} boxSize="120px" bg="gray.600" d="flex" flexDir="column">
            <Text maxW="100px" textAlign="center" isTruncated>
              <AddIcon />
            </Text>
          </Button>
        </WrapItem>
      )}
      <AddOrEditModal {...modalProps} />
    </>
  )
}

export default Card
