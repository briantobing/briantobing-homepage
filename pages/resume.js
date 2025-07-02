import { Container, Heading, Box, Button, AspectRatio, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { DownloadIcon } from '@chakra-ui/icons'

const Resume = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.700') // Add this line

  return (
    <Layout title="Resume">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Resume
        </Heading>

        <Section delay={0.1}>
          {/* PDF Viewer Box */}
          <Box 
            border="1px"
            borderColor="gray.200"
            borderRadius="lg"
            overflow="hidden"
            mb={6}
            shadow="md"
            bg={bgColor} // Add this line
          >
            <AspectRatio ratio={8.5 / 11} w="100%" maxH="800px">
              <object
                data={`/Resume_BrianTobing.pdf?v=${Date.now()}#view=FitH`}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ backgroundColor: 'white' }} // Add this line
              >
                <iframe
                  src={`/Resume_BrianTobing.pdf?v=${Date.now()}#view=FitH`}
                  title="Resume Preview"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', backgroundColor: 'white' }} // Add backgroundColor here
                >
                  This browser does not support PDFs. Please download to view.
                </iframe>
              </object>
            </AspectRatio>
          </Box>

          {/* Download Button */}
          <Box align="center" my={4}>
            <Button
              as="a"
              href={`/Resume_BrianTobing.pdf?v=${Date.now()}`}
              download="Resume_BrianTobing.pdf"
              leftIcon={<DownloadIcon />}
              variant="solid"
              bg={useColorModeValue('teal.500', 'teal.200')}
              color={useColorModeValue('white', 'gray.800')}
              size="md"
              _hover={{
                bg: useColorModeValue('teal.600', 'teal.300')
              }}
              borderRadius="lg"
              px={6}
              shadow="md"
            >
              Download Resume
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume
export { getServerSideProps } from '../components/chakra'