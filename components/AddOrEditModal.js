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
} from '@chakra-ui/react'

const AddOrEditModal = ({ isOpen, onClose, href, text }) => {
  const [siteName, setSiteName] = useState(text || '')
  const [url, setUrl] = useState(href || '')
  return (
    <Modal isOpen={isOpen}>
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
          <Button colorScheme="blue" mr={3} >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddOrEditModal
