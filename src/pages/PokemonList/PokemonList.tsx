import React, { useEffect, Fragment } from 'react'
import { useInfiniteQuery} from 'react-query'
import { FaChevronDown } from 'react-icons/fa'
import { getPokemonListApi } from '../../apis/pokemon'
import { Variants, motion } from 'framer-motion'
import { 
    Header, 
    Loader, 
    CardPokemon, 
} from '../../componets'
import { 
    Stack, 
    Grid,
    Center,
    Spinner,
    Flex,
    Icon,
    Text,
} from '@chakra-ui/react'

type TPokemon = {
    name: string
    url: string
}

const PokemonList: React.FC = () => {
    const MyPokemonsMotion: Variants = {
        initial: {
            transform: 'translateX(-100vw)',
        },
        animate: {
            transform: 'translateX(0)',
        },
        exit: {
            transform: 'translateX(-100vw)',
        },
    }
    
    const pokemons = useInfiniteQuery(
        'pokemons', 
        ({ pageParam: offset = 0 }) => getPokemonListApi({ limit: 20, offset }), 
        {
            getNextPageParam: (last, all) => {
                if (!last.next) return
                let offset = 0
                all.forEach(v => {
                    offset += v.results.length
                })
                return offset
            },
            cacheTime: Infinity,
            staleTime: Infinity,
        }
    )

    const getPokemonIdFromUrl = (url: string) => url.slice(0, -1).split('/').pop()

    useEffect(() => {
        let fetch = pokemons.isFetchingNextPage
        const onScroll = () => {
            if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 100) {
                if (!fetch && !pokemons.isFetchingNextPage) {
                    fetch = true
                    pokemons.fetchNextPage()
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [pokemons.isFetchingNextPage])

    return (
        <>
            <Header
                variants={MyPokemonsMotion}
                initial='initial'
                animate='animate'
                exit='exit'
            />

            <Stack
                as={motion.div}
                variants={MyPokemonsMotion}
                initial='initial'
                animate='animate'
                exit='exit'
                pt='53px'
                pb='1.5rem'
                spacing='3rem'
            >
                {pokemons.isLoading && <Loader />}

                {!pokemons.isLoading && (
                    <Grid
                        templateColumns={{
                            base: 'repeat(2, 1fr)',
                            sm: 'repeat(4, 1fr)',
                        }}
                        gap={{
                            base: '1rem',
                            md: '1.5rem',
                        }}
                    >
                        {pokemons?.data?.pages.map((pokemonPage: any, pageKey: number) => (
                            <Fragment key={pageKey}>
                                {pokemonPage?.results?.map((pokemon: TPokemon, i: any) => (
                                    <CardPokemon
                                        key={i}
                                        id={getPokemonIdFromUrl(pokemon.url)??''}
                                        name={pokemon.name}
                                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonIdFromUrl(pokemon.url)}.svg`}
                                        url={pokemon.url}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </Grid>
                )}

                {pokemons.hasNextPage && (
                    <Center>
                        {pokemons.isFetchingNextPage && (
                            <Spinner
                                h='25px'
                                w='25px'
                                color='primary'
                            />
                        )}
                        {!pokemons.isFetchingNextPage && (
                            <Flex
                                gap='1rem'
                                align='center'
                                color='primary'
                                _hover={{
                                    color: 'primaryDarker',
                                }}
                                transitionDuration='normal'
                                cursor='pointer'
                                h='25px'
                                onClick={() => pokemons.fetchNextPage()}
                            >
                                <Icon as={FaChevronDown} />
                                <Text
                                    fontSize='sm'
                                    fontWeight='medium'
                                >
                                    Load more
                                </Text>
                            </Flex>
                        )}
                    </Center>
                )}
            </Stack>
        </>
    )
}

export default PokemonList