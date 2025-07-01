import {
  Container,
  Badge,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const highlightColor = useColorModeValue('teal.500', 'teal.200')

  return (
    <Layout title="Shun Yuen Construction Company Limited">
      <Container>
        <Title>
          Shun Yuen Construction Limited <Badge>2024 summer</Badge>
        </Title>
        <P>
          As a <Text as="span" color={highlightColor} fontWeight="500" display="inline">Project Coordinator</Text> at Shun Yuen Construction Limited in Hong Kong, I managed the construction of a freshwater reservoir serving 20,000 people, along with various site works and maintenance projects within Hong Kong International Airport. I conducted thorough daily inspections of construction work, materials, and compliance with contractual agreements to ensure adherence to contract laws and standards. Our team achieved <Text as="span" color={highlightColor} fontWeight="500" display="inline">successful completion of multiple critical infrastructure projects</Text> while maintaining strict quality and safety standards.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Duration</Meta>
            <span>May - July 2024</span>
          </ListItem>
          <ListItem>
            <Meta>Location</Meta>
            <span>Hong Kong International Airport, Hong Kong</span>
          </ListItem>
          <ListItem>
            <Meta>Key Skills</Meta>
            <span>Project Management, Documentation, Site Inspection</span>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Microsoft Office, Project Documentation Systems</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/shunyuen_eyecatch.jpg"
          alt="Shun Yuen Construction Limited"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'