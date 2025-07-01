import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="University of Toronto Troitsky Bridge Design Team">
    <Container>
      <Title>
        University of Toronto Troitsky Bridge Design Team <Badge>2024-2025</Badge>
      </Title>
      <P>
        Collaborated with 6 peers to design-build a point load resisting bridge structure and compete against 33 teams
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Achievement</Meta>
          <span>6th Overall, 3rd in Structural Efficiency</span>
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          <span>Concordia University, Montreal</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Rhino3D, AutoCAD</span>
        </ListItem>
      </List>

      <WorkImage 
        src="/images/works/uoft-troitsky_eyecatch.jpg" 
        alt="University of Toronto Troitsky Bridge Design Team"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
