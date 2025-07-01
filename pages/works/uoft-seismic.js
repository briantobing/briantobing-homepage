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
    <Layout title="UofT Seismic Design Team">
      <Container>
        <Title>
          UofT Seismic Design Team <Badge>2023 - present</Badge>
        </Title>
        <P>
          As the <Text as="span" color={highlightColor} fontWeight="500" display="inline">Construction Manager </Text> 
           of UofT Seismic Design Team, I lead a team of 50+ members in designing and constructing a high-rise wooden 
          tower with seismic resistance capabilities for the annual EERI Seismic Design Competition. Our team achieved 
          <Text as="span" color={highlightColor} fontWeight="500" display="inline"> 2nd place overall</Text> among 53 
            international universities in the 2025 competition.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://seismic.skule.ca">
              https://seismic.skule.ca <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>School</Meta>
            <span>University of Toronto</span>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>AutoCAD, Revit, SAP2000, Asana, Excel</span>
          </ListItem>
        </List>

        <WorkImage 
          src="/images/works/uoft-seismic_eyecatch.jpg"
          alt="UofT Seismic Design Team" 
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
