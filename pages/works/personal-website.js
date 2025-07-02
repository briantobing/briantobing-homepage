import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const highlightColor = useColorModeValue('teal.500', 'teal.200')

  return (
    <Layout title="Personal Website">
      <Container>
        <Title>
          Personal Website <Badge>2024</Badge>
        </Title>
        <P>
          As an aspiring <Text as="span" color={highlightColor} fontWeight="500" display="inline">Structural Engineer</Text>, 
          I created this portfolio website to showcase my journey in civil engineering. Using GitHub Copilot for development efficiency, 
          I implemented features including an <Text as="span" color={highlightColor} fontWeight="500" display="inline">interactive 3D structural model viewer, 
          custom photo gallery with zoom capabilities, and responsive layouts</Text>.
        </P>
        
        <P>
          This project represents my exploration of how <Text as="span" color={highlightColor} fontWeight="500" display="inline">AI-driven tools</Text> can 
          enhance structural engineering workflows. By experiencing firsthand how AI assistance accelerated the development process, 
          I gained valuable insights into the potential of <Text as="span" color={highlightColor} fontWeight="500" display="inline">AI integration in structural engineering tasks</Text> such as 
          design optimization, analysis automation, and project coordination. This practical experience reinforces my vision of leveraging 
          emerging technologies to advance the field of structural engineering.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://briantobing-homepage.vercel.app/" target="_blank">
              https://briantobing-homepage.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Desktop and Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Three.js, Chakra UI, GitHub Copilot</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/briantobing/briantobing-homepage" target="_blank">
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/personalwebsite_eyecatch.jpg"
          alt="Personal Website"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'