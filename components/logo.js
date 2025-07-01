import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > div {
    transition: 200ms ease;
    transform: rotate(-20deg);
    width: 18px;    // Optimized size
    height: 18px;   // Optimized size
    margin-right: 4px;    // Optimized spacing
    filter: ${props => props.isDark ? 'invert(1)' : 'none'};
  }

  &:hover > div {
    transform: rotate(0deg);
  }
`

const Logo = () => {
  const isDark = useColorModeValue(false, true)
  
  return (
    <Link href="/" scroll={false}>
      <LogoBox isDark={isDark}>
        <div>
          <Image
            src="/helmet.png"
            alt="Helmet icon"
            width={18}
            height={18}
          />
        </div>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          Brian Tobing
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
