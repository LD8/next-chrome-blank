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
} from '@chakra-ui/react'
import { getData, setData } from '../utils'

const AddOrEditModal = ({ isOpen, onClose, href, text, index, setToUpdate }) => {
  const [siteName, setSiteName] = useState(text || '')
  const [url, setUrl] = useState(href || '')
  const handleSubmit = () => {
    if (siteName.trim() === '' || url.trim() === '') {
      return
    }
    const datum = { href: url, text: siteName }
    const newData = getData()
    if (index !== undefined && index !== null) {
      // console.log('正在修改现有数据')
      newData.splice(index, 1, datum)
    } else {
      // console.log('正在添加新数据')
      newData.push(datum)
      setSiteName('')
      setUrl('')
    }
    setData(newData)
    setToUpdate(true)
    onClose()
  }

  const handleDelete = () => {
    // console.log('正在删除数据')
    const newData = getData()
    newData.splice(index, 1)
    setData(newData)
    setToUpdate(true)
    onClose()
  }
  useEffect(() => () => {
  })

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
            {index !== -1 && (
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
