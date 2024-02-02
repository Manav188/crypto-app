import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w='full' h={'100vh'}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
      <Image w={'full'} h='full' objectFit={'contain'} src={'https://cdn.pixabay.com/photo/2018/05/23/04/32/cryptocurrency-3423264_960_720.jpg'} /></motion.div>
      <Text fontSize={'6xl'} textAlign='center' fontWeight={'thin'} color='whiteAlpha.700' mt={'-20'}>XCrypto</Text>
    </Box>
  )
}

export default Home