import React from 'react'
import { LOGO } from '../assets/images'
import { Variants, motion } from 'framer-motion'
import { 
    Box, 
    Container, 
    Flex, 
    Image,
} from '@chakra-ui/react'

type HeaderProps = {
    variants?: Variants
    initial?: any
    animate?: any
    exit?: any
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { 
        variants,
        initial,
        animate,
        exit,
    } = props

    return (
        <Box
            pos='fixed'
            top='0'
            left='0'
            right='0'
            w='body-width'
            zIndex='sticky'
        >
            <Container
                pos='relative'
                overflowX='clip'
                overflowY='visible'
            >
                <Flex
                    as={motion.div}
                    variants={variants}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    align='center'
                    justify='space-between'
                    h='header-height'
                    paddingY='24px'
                >
                    <Image
                        src={LOGO}
                        w='100px'
                    />
                </Flex>
            </Container>
        </Box>
    )
}

export default Header