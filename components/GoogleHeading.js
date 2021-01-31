import { Heading, Link } from '@chakra-ui/react'

const GoogleHeading = () => {
  return (
    <Heading as="h1" fontSize="100px" color="red.700" mb={5} letterSpacing={5} textShadow="0 4px 2px black">
      <Link color="gray" href="https://google.com">
        Goooogle
      </Link>
    </Heading>
  )
}

export default GoogleHeading
