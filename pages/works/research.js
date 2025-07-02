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
    <Layout title="Research">
      <Container>
        <Title>
          UofT Structural Engineering Research <Badge>2025 summer</Badge>
        </Title>
        <P>
          As a <Text as="span" color={highlightColor} fontWeight="500" display="inline">
            Structural Engineering Research Assistant</Text> under Prof. Shamim Sheikh at University of Toronto, 
          I conducted research on <Text as="span" color={highlightColor} fontWeight="500" display="inline">
            fiberglass reinforced polymers (GFRP)</Text> for concrete reinforcement. Through testing structural specimens 
          and analyzing environmental durability, our research evaluated GFRP&apos;s performance under <Text as="span" 
          color={highlightColor} fontWeight="500" display="inline">various environmental conditions</Text> including 
          elevated temperatures, marine exposure, and chemical environments. This study contributes to advancing 
          sustainable construction materials and improving structural durability in challenging environments.
        </P>
        
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Duration</Meta>
            <span>May - August 2025</span>
          </ListItem>
          <ListItem>
            <Meta>Location</Meta>
            <span>University of Toronto</span>
          </ListItem>
          <ListItem>
            <Meta>Research Focus</Meta>
            <span>GFRP Concrete Reinforcement</span>
          </ListItem>
          <ListItem>
            <Meta>Supervisor</Meta>
            <span>Prof. Shamim Sheikh</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/uoft-research_eyecatch.jpg"
          alt="UofT Structural Engineering Research"
          width="100%"
          height="auto"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'