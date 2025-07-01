import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import UoftTroitsky from './works/uoft-troitsky'  // Update this line

import thumbUoftSeismic from '../public/images/works/uoft-seismic_eyecatch.jpg'
import thumbUoftTroitsky from '../public/images/works/uoft-troitsky_eyecatch.jpg'
import thumbUoftResearch from '../public/images/works/uoft-research_eyecatch.jpg'
import thumbShunYuen from '../public/images/works/shunyuen_eyecatch.jpg'
import thumbPersonalWebsite from '../public/images/works/personalwebsite_eyecatch.jpg'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Design Teams
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem 
              id="uoft-seismic" 
              title="University of Toronto Seismic Design Team" 
              thumbnail={thumbUoftSeismic}
            >
              Design and construct earthquake-resistant tower structure
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="uoft-troitsky"  // Make sure this matches exactly
              title="University of Toronto Troitsky Design Team"
              thumbnail={thumbUoftTroitsky}
            >
              Design and construct a point load resisting bridge structure
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider my={4} />

        <Heading as="h3" fontSize={20} mb={4}>
          Work Experience
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="research"
              title="GFRP Concrete Research Assistant"
              thumbnail={thumbUoftResearch}
            >
              Research on fiberglass reinforced polymers for concrete reinforcement
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="shunyuen"
              title="Project Coordinator at Shun Yuen Construction"
              thumbnail={thumbShunYuen}
            >
              Construction management of freshwater reservoir and airport facilities in Hong Kong
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider my={4} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="personal-website"
              title="Personal Website"
              thumbnail={thumbPersonalWebsite}
            >
              A personal website showcasing my projects, experiences, and interests in civil engineering
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
export { UoftTroitsky }  // If you need to export it, use the new name



