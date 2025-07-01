import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { BioSectionGrid } from '../components/bio'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a civil engineering student based in Canada!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brian Tobing 
          </Heading>
          <p>Aspiring structural engineer with a passion for project management</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/web_pic.JPG"
              alt="Profile image"
              width="130"
              height="150"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I am an incoming third year civil engineering student studying at the University of Toronto.
          Throughout my education journey and past internships, I have developed a
          passion in structural engineering, enjoyed the process of
          problem-solving, and have a strong interest in project management. I aspire 
          to contribute to impactful projects that will shape the city skyline. I am 
          currently pursuing a major in Civil Engineering and minoring in Engineering 
          Business.

          {/* Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
          
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Hong Kong (香港)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed Grade 10 in St. Pauls' College (聖保羅書院), Hong Kong
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed high school at Albert College, Belleville, Ontario, Canada
        </BioSection>
        <BioSectionGrid>
          <BioYear>2023 - 2028 (Expected)</BioYear>
          <span>Studying Civil Engineering + PEY Co-op at University of Toronto</span>
        </BioSectionGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSectionGrid>
          <BioYear>2025 May-Aug</BioYear>
          <span>Structural Research Assistant under Prof. Shamim Sheikh at University of Toronto</span>
        </BioSectionGrid>
        <BioSectionGrid>
          <BioYear>2024 May-Aug</BioYear>
          <span>Project Coordinator Intern at Shun Yuen Construction Company Ltd., Hong Kong</span>
        </BioSectionGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://open.spotify.com/user/21hr4zjcu6yypv33sfwvxknya
" target="_blank">
            Music
          </Link>
          , Chess
          {/*{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>*/}
          ,{' '}
          <Link as={NextLink} href="/gallery" passHref scroll={false}>
            Drawing
          </Link>
          , NBA, F1, Mahjong (麻將)
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/brian-tobing/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @briantobing
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/briantobing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @briantobing
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:brian.tobing@mail.utoronto.ca" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
          {/*<ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>*/}
        </List>
        {/*
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>*/}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
