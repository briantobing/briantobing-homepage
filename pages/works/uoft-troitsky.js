import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons' // Add this import
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const highlightColor = useColorModeValue('teal.500', 'teal.200')

  return (
    <Layout title="University of Toronto Troitsky Design Team">
      <Container>
        <Title>
          UofT Troitsky Design Team <Badge>2024 - 2025</Badge>
        </Title>
        <P>
          As a <Text as="span" color={highlightColor} fontWeight="500" display="inline">
            Team Member</Text> of the UofT Troitsky Design Team, I work alongside 
            6 peers to design and construct a point load resisting bridge structure. Through 
            optimization and analysis using Rhino3D, our team achieved <Text as="span" 
            color={highlightColor} fontWeight="500" display="inline">6th place overall 
            </Text> and <Text as="span" color={highlightColor} fontWeight="500" display="inline">
              3rd in structural efficiency</Text> among 33 competing teams in the 2025 competition.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://troitsky.skule.ca/">
              https://troitsky.skule.ca/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>School</Meta>
            <span>University of Toronto</span>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Rhino3D, AutoCAD</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/uoft-troitsky_eyecatch.jpg"
          alt="UofT Troitsky Bridge Design Team"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
