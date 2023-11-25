import { PiSneakerMove } from 'react-icons/pi'
import { CiLineHeight } from 'react-icons/ci'
import { LiaWeightHangingSolid } from 'react-icons/lia'
import { getPokemonDetailApi } from '../../apis/pokemon'
import { Loader } from '../../componets'
import { ROUTE_PATH } from '../../router'
import { FaArrowLeft, FaLevelUpAlt } from 'react-icons/fa'
import { LuSword, LuSwords } from 'react-icons/lu'
import { Link as ReactLink, useParams } from 'react-router-dom'
import { UseQueryResult, useQuery } from 'react-query'
import {
    BsShield,
    BsShieldPlus,
    BsSuitHeart,
} from 'react-icons/bs'
import {
    Avatar,
    Box,
    Flex,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Tag,
    Text,
    Tooltip,
} from '@chakra-ui/react'

function PokemonDetail() {
    const { pokemonId } = useParams()
    const { data, isLoading }: UseQueryResult<any, any> = useQuery(
        `pokemon-${pokemonId}`,
        () => getPokemonDetailApi({ id: pokemonId ?? '' }),
        {
            cacheTime: Infinity,
            staleTime: Infinity,
        },
    )

    if (isLoading) return <Loader />

    return (
        <Box>
            <Flex
                pos='relative'
                justify='center'
                w='100%'
                h={{
                    base: '300px',
                    md: '400px',
                }}
            >
                <Link
                    as={ReactLink}
                    to={ROUTE_PATH.POKEMON_LIST}
                    pos='absolute'
                    left='0'
                    opacity='.5'
                    _hover={{
                        opacity: '1',
                    }}
                >
                    <Icon
                        as={FaArrowLeft}
                        fontSize='22px'
                    />
                </Link>
                <Image
                    pos='relative'
                    src={data?.sprites?.other?.dream_world?.front_default}
                />
            </Flex>

            <Stack
                spacing='3rem'
                px='1.25rem'
            >
                <Flex justify='space-between'>
                    <Flex
                        align='center'
                        gap='.5rem'
                    >
                        <Text
                            fontSize='lg'
                            fontWeight='semibold'
                            _firstLetter={{
                                textTransform: 'capitalize',
                            }}
                        >
                            {data?.name?.replaceAll('-', ' ')}
                        </Text>
                    </Flex>
                    <HStack>
                        {data?.types?.map((t: any, i: number) => (
                            <Tag
                                key={i}
                                variant='solid'
                                size='sm'
                            >
                                {t.type.name}
                            </Tag>
                        ))}
                    </HStack>
                </Flex>

                <HStack spacing='3rem'>
                    <Stack>
                        <Text
                            fontWeight='semibold'
                            fontSize='sm'
                        >
                            Weight
                        </Text>
                        <Flex
                            align='center'
                            gap='.5rem'
                        >
                            <Icon
                                as={LiaWeightHangingSolid}
                                fontSize='20px'
                            />
                            <Text>{data?.weight}</Text>
                        </Flex>
                    </Stack>
                    <Stack>
                        <Text
                            fontWeight='semibold'
                            fontSize='sm'
                        >
                            Height
                        </Text>
                        <Flex
                            align='center'
                            gap='.5rem'
                        >
                            <Icon
                                as={CiLineHeight}
                                fontSize='20px'
                            />
                            <Text>{data?.height}</Text>
                        </Flex>
                    </Stack>
                </HStack>

                <Stack>
                    <Text
                        fontWeight='semibold'
                        fontSize='sm'
                    >
                        Stats
                    </Text>
                    <HStack
                        gridGap='2rem'
                        rowGap='1rem'
                        flexWrap='wrap'
                    >
                        <Tooltip label='Attack'>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={LuSword}
                                    fontSize='20px'
                                    color='orange.500'
                                />
                                <Text>{data?.stats?.find((s: any) => s.stat.name === 'attack')?.base_stat ?? '-'}</Text>
                            </Flex>
                        </Tooltip>

                        <Tooltip label='Special Attack'>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={LuSwords}
                                    fontSize='20px'
                                    color='orange.500'
                                />
                                <Text>{data?.stats?.find((s: any) => s.stat.name === 'special-attack')?.base_stat ?? '-'}</Text>
                            </Flex>
                        </Tooltip>

                        <Tooltip label='Defense'>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={BsShield}
                                    fontSize='19px'
                                    color='blue.500'
                                />
                                <Text>{data?.stats?.find((s: any) => s.stat.name === 'defense')?.base_stat ?? '-'}</Text>
                            </Flex>
                        </Tooltip>

                        <Tooltip label='Special Defense'>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={BsShieldPlus}
                                    fontSize='19px'
                                    color='blue.500'
                                />
                                <Text>{data?.stats?.find((s: any) => s.stat.name === 'special-defense')?.base_stat ?? '-'}</Text>
                            </Flex>
                        </Tooltip>

                        <Tooltip label='Health'>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={BsSuitHeart}
                                    fontSize='19px'
                                    color='red.500'
                                />
                                <Text>{data?.stats?.find((s: any) => s.stat.name === 'hp')?.base_stat ?? '-'}</Text>
                            </Flex>
                        </Tooltip>

                        <Tooltip label='Speed'>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={PiSneakerMove}
                                    fontSize='21px'
                                    color='green.500'
                                />
                                <Text>{data?.stats?.find((s: any) => s.stat.name === 'speed')?.base_stat ?? '-'}</Text>
                            </Flex>
                        </Tooltip>
                    </HStack>
                </Stack>

                <Stack>
                    <Text
                        fontWeight='semibold'
                        fontSize='sm'
                    >
                        Abilities
                    </Text>
                    <HStack flexWrap='wrap'>
                        {data?.abilities?.map((ab: any, i: number) => (
                            <Flex
                                key={i}
                                gap='.5rem'
                                align='center'
                                py='.25rem'
                                px='.75rem'
                                borderRadius='full'
                                borderWidth='1px'
                                w='max-content'
                            >
                                <Avatar
                                    name={ab.ability?.name?.replaceAll('-', ' ')}
                                    color='transparent'
                                    w='15px'
                                    h='15px'
                                />
                                <Text
                                    fontSize='sm'
                                    _firstLetter={{ textTransform: 'capitalize' }}
                                >
                                    {ab.ability?.name?.replaceAll('-', ' ')}
                                </Text>
                            </Flex>
                        ))}
                    </HStack>
                </Stack>

                <Stack>
                    <Text
                        fontWeight='semibold'
                        fontSize='sm'
                    >
                        Experience
                    </Text>
                    <Flex
                        align='center'
                        gap='.5rem'
                    >
                        <Icon
                            as={FaLevelUpAlt}
                            fontSize='20px'
                            color='green.500'
                        />
                        <Text>+{data?.base_experience}</Text>
                    </Flex>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PokemonDetail