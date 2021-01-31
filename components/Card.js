import React, { useState } from 'react'
import { Link, Text, Image, Center, WrapItem, Button, useDisclosure } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import AddOrEditModal from './AddOrEditModal'

const Card = ({ href, imgSrc, text, imgAlt = 'an icon' }) => {
  const [hovered, setHover] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalProps = {
    isOpen,
    onClose,
    href,
    text,
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
              <Image src={imgSrc} alt={imgAlt} boxSize="80px" objectFit="cover" />
              <Text maxW="100px" fontSize="14px" textAlign="center" pb="8px" isTruncated>
                {text}
              </Text>
            </Center>
          </Link>
          <HamburgerIcon
            w={3}
            h={3}
            color="gray.500"
            position="absolute"
            top="10px"
            right="10px"
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
