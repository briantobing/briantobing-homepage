import { Container, Heading, Box, Button, AspectRatio } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { DownloadIcon } from '@chakra-ui/icons'

const Resume = () => (
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
        >
          <AspectRatio ratio={8.5 / 11} w="100%" maxH="800px">
            <object
              data={`/Resume_BrianTobing.pdf?v=${Date.now()}#view=FitH`}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <iframe
                src={`/Resume_BrianTobing.pdf?v=${Date.now()}#view=FitH`}
                title="Resume Preview"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
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
            colorScheme="teal"
            size="lg"
          >
            Download Resume
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Resume
export { getServerSideProps } from '../components/chakra'