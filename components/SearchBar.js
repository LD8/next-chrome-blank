import { InputGroup, InputLeftAddon, InputRightAddon, Input } from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <InputGroup w="100%" maxW="400px" rounded="lg" bg="gray.700" boxShadow="0 0 5px black" mb={16}>
      <InputLeftAddon children="G" />
      <Input placeholder="Search me" />
      <InputRightAddon children="F" />
    </InputGroup>
  )
}

export default SearchBar
