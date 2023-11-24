import request from './request'

type GetPokemonListProps = {
    limit: number
    offset: number
}

export async function getPokemonListApi(props: GetPokemonListProps) {
    const { limit, offset } = props
    try {
        const response = await request().get('https://pokeapi.co/api/v2/pokemon', {
            params: {
                limit,
                offset: Number(offset) > 629 ? 629 : offset,
            }
        })
        return response.data
    } catch (error: any) {
        return error.response
    }
}