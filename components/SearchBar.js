import { InputGroup, InputLeftAddon, InputRightAddon, Input, Link } from '@chakra-ui/react'

const SearchBar = () => {
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      window.open('https://www.baidu.com/', '_blank')
    }
  }
  return (
    <InputGroup w="100%" maxW="400px" rounded="lg" bg="gray.700" boxShadow="0 0 5px black" mb={16}>
      <InputLeftAddon>G</InputLeftAddon>
      <Input placeholder="Search me" onKeyUp={handleKeyUp} />
      <InputRightAddon>
        <Link href="https://www.baidu.com/" isExternal>
          Search
        </Link>
      </InputRightAddon>
    </InputGroup>
  )
}

export default SearchBar
