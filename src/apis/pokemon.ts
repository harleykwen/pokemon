import request from './request'

type GetPokemonListProps = {
    limit: number
    offset: number
}

type GetPokemonDetailProps = {
    id: string
}

export async function getPokemonListApi(props: GetPokemonListProps) {
    const { limit, offset } = props
    try {
        const response = await request().get('/pokemon', {
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

export async function getPokemonDetailApi(props: GetPokemonDetailProps) {
    const { id } = props
    try {
        const response = await request().get(`/pokemon/${id}`)
        return response.data
    } catch (error: any) {
        return error.response
    }
}