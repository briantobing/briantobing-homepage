import { Text, Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Vision = () => {
  const highlightColor = useColorModeValue('teal.600', 'teal.200')
  const headerBg = useColorModeValue('teal.50', 'whiteAlpha.200')
  
  return (
    <Layout title="Vision">
      <Container>
        <Box 
          borderRadius="lg" 
          bg={headerBg}
          p={3} 
          mb={6}
          align="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Shaping the Future of Structural Engineering
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            Vision & Perspective
          </Heading>
          <Paragraph mb={6} lineHeight="1.6">
            I am a Civil Engineering student at the University of Toronto with an enthusiasm for <Text as="span" color={highlightColor} fontWeight="bold">structural engineering and project leadership</Text>. Growing up in Hong Kong, I was amazed by its impressive skyline. Seeing these architectural achievements up close sparked my passion for creating structures that make a lasting impact, while understanding the complex coordination needed to bring these visions to life.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={4}>
            The Future Engineer
          </Heading>
          <Paragraph mb={6} lineHeight="1.6">
            The structural engineer of tomorrow needs to be more than just a technical expert. As someone aspiring to lead meaningful projects, I see the value in combining <Text as="span" color={highlightColor} fontWeight="bold">strong engineering fundamentals with effective project management skills</Text>. I&apos;m genuinely excited about how AI is enhancing both our technical capabilities and project coordination. These advancements are revolutionizing how we plan, design, and deliver complex structural projects.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={4}>
            Future Vision & Mission
          </Heading>
          <Paragraph mb={6} lineHeight="1.6">
            I see an incredible future where <Text as="span" color={highlightColor} fontWeight="bold">AI and human expertise work together seamlessly</Text> throughout project lifecycles. From concept to completion, artificial intelligence will enhance our ability to manage resources, coordinate teams, and optimize designs. As structural engineers and project leaders, we&apos;ll focus on making strategic decisions that balance technical excellence with practical project delivery.
          </Paragraph>
          <Paragraph lineHeight="1.6">
            Inspired by Hong Kong&apos;s development, my passion lies in leading <Text as="span" color={highlightColor} fontWeight="bold">structural engineering projects that shape city skylines</Text>. I aim to create structures that combine engineering excellence with efficient project execution. Through smart project management and technological innovation, I want to build landmarks that stand as achievements we can all be proud of, while setting new standards for how structural engineering projects are delivered.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Vision
export { getServerSideProps } from '../components/chakra'

