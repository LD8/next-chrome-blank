import React, { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Spacer,
  Box,
  useDisclosure,
  InputLeftAddon,
  InputRightAddon,
  InputGroup,
} from '@chakra-ui/react'

const AddOrEditModal = ({ dispatch, cardData, index, setOpenedCardIndex }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [siteName, setSiteName] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    // console.log('index changed to: ', index)
    if (index !== null) {
      onOpen()
      if (index >= 0) {
        // 显示现有数据
        setSiteName(cardData[index].text)
        setUrl(cardData[index].href.replace(/^http:\/\//, '').replace(/\/$/, ''))
      }
    } else {
      // 如果是 null 说明需要关闭 modal
      onClose()
    }
  }, [index])

  const handleSubmit = () => {
    if (siteName.trim() === '' || url.trim() === '') {
      return
    }
    const datum = { href: `http://${url}/`, text: siteName }
    if (index >= 0) {
      console.log('正在修改现有数据')
      dispatch({ type: 'edit_card', payload: { index, datum } })
    } else {
      console.log('正在添加新数据')
      dispatch({ type: 'add_card', payload: { datum } })
    }
    handleModalClose()
  }

  const handleDelete = () => {
    console.log('正在删除数据')
    dispatch({ type: 'del_card', payload: { index } })
    handleModalClose()
  }

  const handleModalClose = () => {
    setSiteName('')
    setUrl('')
    // 设置 index 为 null 是关闭 modal 的机制
    setOpenedCardIndex(null)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  return (
    <Modal isOpen={isOpen} onClick={onClose} motionPreset="slideInBottom" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add shortcut</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Website Name</FormLabel>
            <Input
              placeholder="Website Name"
              onKeyUp={handleEnter}
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>URL</FormLabel>
            <InputGroup>
              <InputLeftAddon>http://</InputLeftAddon>
              <Input placeholder="URL" onKeyUp={handleEnter} value={url} onChange={(e) => setUrl(e.target.value)} />
              <InputRightAddon>/</InputRightAddon>
            </InputGroup>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex w="100%">
            {index !== -1 && index !== null && (
              <Button colorScheme="red" mr={3} onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Spacer />
            <Box>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={handleModalClose}>Cancel</Button>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddOrEditModal
