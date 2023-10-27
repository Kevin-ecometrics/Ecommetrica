import React from 'react'
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
function Footer() {
  return (
    <div className='text-black border-t border-black'>
          <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Image src='/logo.png' width={40} height={40} />
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" className='text-center' color="fg.subtle">
        &copy; {new Date().getFullYear()} Ecommetrica, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
    </div>
  )
}

export default Footer