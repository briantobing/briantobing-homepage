import styled from '@emotion/styled'
import { Box, Text } from '@chakra-ui/react'

export const BioSection = styled.div`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 0.5em;
`

export const BioSectionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, auto) 1fr;
  gap: 0 0.005em;  // Changed: reduced horizontal gap to match BioSection spacing
  margin-bottom: 0.5em;

  @media (max-width: 480px) {
    grid-template-columns: minmax(90px, auto) 1fr;
    gap: 0 0.5em;  // Changed: maintain consistent reduced spacing on mobile
  }
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export const ProfessionalBio = () => {
  return (
    <Box>
      <Text mb={4}>
        Hi, I'm Brian Tobing, a Civil Engineering student at the University of Toronto with a vision for the future of structural engineering. In an era where artificial intelligence is revolutionizing our industry, I position myself at the intersection of traditional structural engineering principles and emerging technological innovations.
      </Text>

      <Text mb={4}>
        I believe the future structural engineer must be both a technical expert and a digital innovator. As AI continues to transform our approach to design and analysis, I'm passionate about leveraging these tools to enhance our capabilities in structural calculations, CAD development, and project optimization. This technological integration isn't just about efficiency—it's about pushing the boundaries of what's possible in structural design.
      </Text>

      <Text mb={4}>
        Looking ahead, I envision a practice where AI assists engineers in rapid prototyping of structural solutions, automated code compliance checks, and optimization of material usage. My goal is to lead projects where traditional engineering wisdom meets computational innovation, creating more sustainable, efficient, and ambitious structures that define city skylines.
      </Text>

      <Text mb={4}>
        The future of structural engineering lies in our ability to adapt and embrace emerging technologies while maintaining the fundamental principles that ensure safety and reliability. I'm committed to being at the forefront of this evolution, developing workflows that integrate AI tools with engineering expertise to deliver unprecedented value to our projects and clients.
      </Text>

      <Text>
        By combining my structural engineering foundation with a forward-thinking approach to technology integration, I aim to contribute to a new era of construction where AI-assisted design and human creativity work in harmony to shape the built environment of tomorrow.
      </Text>
    </Box>
  )
}
