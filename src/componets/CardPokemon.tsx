import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { ROUTE_PATH } from '../router'
import { 
    Box, 
    Flex, 
    Image, 
    Link, 
    Stack, 
    Text, 
} from '@chakra-ui/react'

type CardPokemonProps = {
    id: string
    name: string
    image: string
    url: string
}

const CardPokemon: React.FC<CardPokemonProps> = (props: CardPokemonProps) => {
    const {
        name,
        image,
    } = props

    return (
        <Link
            as={ReactLink}
            to={ROUTE_PATH.POKEMON_DETIAL.replace(':pokemonId', name)}
            _hover={{
                textDecor: 'none',
            }}
            h='100%'
        >
            <Box
                boxShadow='card'
                overflow='hidden'
                borderRadius='10px'
                _hover={{
                    bg: '#F9F9F9',
                }}
                transitionDuration='normal'
                h='100%'
            >
                <Flex
                    w='100%'
                    justify='center'
                    py='1rem'
                    pos='relative'
                >
                    <Image
                        src={image}
                        w='100px'
                        h='100px'
                    />
                </Flex>
                <Stack
                    p='.75rem'
                    spacing='.75rem'
                >
                    <Text
                        fontSize='sm'
                        fontWeight='semibold'
                        _firstLetter={{
                            textTransform: 'capitalize',
                        }}
                    >
                        {name.replaceAll('-', ' ')}
                    </Text>
                </Stack>
            </Box>
        </Link>
    )
}

export default CardPokemon