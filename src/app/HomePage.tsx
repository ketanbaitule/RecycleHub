"use client"
import { Heading, Highlight, Box, Center, flexbox, Image } from '@chakra-ui/react';
import Cycle from '@/images/cycle.png';
// import Image from 'next/image';
import SusGoals from '@/images/Sustainable_goals.png'

// https://files.catbox.moe/jymxhn.png
// https://files.catbox.moe/3v8jkj.png
// https://files.catbox.moe/45klth.png

export default function HomePage() {
  return (
    <>
      <Box display= 'flex' alignItems= 'center' justifyContent= 'center'>
        <Heading size="4xl">
          <Highlight
                    query={['RecycleHub']}
                    styles={{ px: '3', py: '0',  bg: '#00FF00' }}
                >
                    Welcome to RecycleHub.
          </Highlight>
        </Heading>
        <br />
      </Box>
        <br />
      <Box display= 'flex' alignItems= 'center' justifyContent= 'center'>
        <Heading size="lg" maxWidth='800' textAlign='center'>
        We aim to provide a clear and established pathway for the collection and re-processing of unconventional wastes.
        </Heading>
      </Box>
      <br />
      
      <Box height={30}/>
      <hr />
      <Box height={30}/>
      <Box display= 'grid' alignItems= 'center' justifyContent= 'center'>
        <Heading size="lg" color="teal.500" textAlign='center' textTransform='uppercase'>
          Problem Statement
        </Heading>
        <Box height={30}/>
        <Heading size="lg" maxWidth='805' textAlign='justify'>
          <Highlight
                    query={["don't communicate well", "reward people"]}
                    styles={{ px: '3', py: '0',  bg: '#00FF00' }}
                >
                    In India, there&apos;s a big problem with dealing with hazardous waste like chemicals and plastics. People who make waste, those who collect it, and those who can recycle it don&apos;t communicate well. Because of this, a lot of recyclable stuff goes to waste, harming the environment. There&apos;s also no good way to reward people for recycling or report waste issues to authorities.
          </Highlight>
        </Heading>
      </Box>
      <Box height={30}/>
      <hr />
      <Box height={30}/>
      <Box display= 'grid' alignItems= 'center' justifyContent= 'center'>
        <Heading size="lg" color="teal.500" textAlign='center' textTransform='uppercase'>
          Our waste management cycle
        </Heading>
      <Box height={30}/>
        <Image 
          objectFit='contain'
          src={"https://files.catbox.moe/3v8jkj.png"}
          alt='cycle'
          width={600}
          height={600}
        />
      </Box>
      <Box height={30}/>
      <hr />
      <Box height={30}/>
      <Box display= 'grid' alignItems= 'center' justifyContent= 'center'>
        <Heading size="lg" color="teal.500" textAlign='center' textTransform='uppercase'>
          Social Contribution
        </Heading>
      <Box display= 'flex' alignItems= 'center' justifyContent= 'center'>
        <Heading size="lg" maxWidth='800' textAlign='center'>
        It is our utmost priority to contirbute towards the United Nations Sustainable Goals 
        </Heading>
      </Box>
      <Box height={30}/>
        <Image 
          objectFit='contain'
          src={"https://files.catbox.moe/jymxhn.png"}
          alt='cycle'
          width={600}
          height={600}
        />
      </Box>
    </>
  );
}