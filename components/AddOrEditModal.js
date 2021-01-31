import React, { useState } from 'react'
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
} from '@chakra-ui/react'
import { getData, setData } from '../utils'

const AddOrEditModal = ({ isOpen, onClose, href, text, index, cardData, setCardData }) => {
  const [siteName, setSiteName] = useState(text || '')
  const [url, setUrl] = useState(href || '')
  const handleSubmit = () => {
    if (siteName.trim() === '' || url.trim() === '') {
      return
    }
    const datum = { href: url, text: siteName }
    const newData = [...cardData]
    if (index !== undefined && index !== null) {
      // 正在修改现有数据
      console.log('正在修改现有数据')
      newData.splice(index, 1, datum)
      console.log(newData)
    } else {
      // 正在添加新数据
      console.log('正在添加新数据')
      newData.push(datum)
      setSiteName('')
      setUrl('')
    }
    setCardData(newData)
    onClose()
  }

  const handleDelete = () => {
    const newData = [...cardData]
    newData.splice(index, 1)
    setCardData(newData)
    // onClose()
  }

  return (
    <Modal isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add shortcut</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Website Name</FormLabel>
            <Input value={siteName} placeholder="Website Name" onChange={(e) => setSiteName(e.target.value)} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>URL</FormLabel>
            <Input value={url} placeholder="URL" onChange={(e) => setUrl(e.target.value)} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex w="100%">
            {index !== undefined && (
              <Button colorScheme="red" mr={3} onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Spacer />
            <Box>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddOrEditModal
