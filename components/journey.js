import { Container, Heading, Box, Text } from '@chakra-ui/react'
import Section from '../components/section'

const Journey = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Vision & Perspective
        </Heading>
        <Text mb={4}>
          Hi, I'm Brian Tobing, a Civil Engineering student at the University of Toronto with a vision for the future of structural engineering. In an era where artificial intelligence is revolutionizing our industry, I position myself at the intersection of traditional structural engineering principles and emerging technological innovations.
        </Text>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          The Future Engineer
        </Heading>
        <Text mb={4}>
          I believe the future structural engineer must be both a technical expert and a digital innovator. As AI continues to transform our approach to design and analysis, I'm passionate about leveraging these tools to enhance our capabilities in structural calculations, CAD development, and project optimization. This technological integration isn't just about efficiency—it's about pushing the boundaries of what's possible in structural design.
        </Text>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Future Practice
        </Heading>
        <Text mb={4}>
          Looking ahead, I envision a practice where AI assists engineers in rapid prototyping of structural solutions, automated code compliance checks, and optimization of material usage. My goal is to lead projects where traditional engineering wisdom meets computational innovation, creating more sustainable, efficient, and ambitious structures that define city skylines.
        </Text>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Evolution & Adaptation
        </Heading>
        <Text mb={4}>
          The future of structural engineering lies in our ability to adapt and embrace emerging technologies while maintaining the fundamental principles that ensure safety and reliability. I'm committed to being at the forefront of this evolution, developing workflows that integrate AI tools with engineering expertise to deliver unprecedented value to our projects and clients.
        </Text>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Mission
        </Heading>
        <Text>
          By combining my structural engineering foundation with a forward-thinking approach to technology integration, I aim to contribute to a new era of construction where AI-assisted design and human creativity work in harmony to shape the built environment of tomorrow.
        </Text>
      </Section>
    </Container>
  )
}

export default Journey