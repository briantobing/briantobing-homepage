import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <>
    <Box 
      align="center" 
      opacity={0.4} 
      fontSize="sm"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
    >
      &copy; {new Date().getFullYear()} Brian Tobing.
    </Box>
    <Box 
      align="center" 
      opacity={0.4} 
      fontSize="sm"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
    > 
      Inspired by{' '}
      <Button
        as={NextLink}
        href="https://www.craftz.dog/"
        scroll={false}
        variant="link"
        colorScheme="teal"
        size="sm"
        opacity={1}
        fontWeight="medium"
        _hover={{
          textDecoration: 'underline',
          opacity: 0.8
        }}
      >
        Takuya Matsuyama
      </Button>
    </Box>
    </>
  )
}

export default Footer
