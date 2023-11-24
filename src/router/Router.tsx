import React, { Suspense, lazy } from 'react'
import Loader from '../componets/Loader'
import Layout from './Layout'
import ROUTE_PATH from './path'
import { AnimatePresence } from 'framer-motion'
import { 
    Routes, 
    Route, 
    Navigate, 
} from 'react-router-dom'

const PokemonList = lazy(() => import('../pages/PokemonList/PokemonList'))
const PokemonDetail = lazy(() => import('../pages/PokemonDetail/PokemonDetail'))

const Router: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            path='/'
                            element={<Navigate to={ROUTE_PATH.POKEMON_LIST} />}
                        />
                        <Route
                            path={ROUTE_PATH.POKEMON_LIST}
                            element={<PokemonList />}
                        />
                        <Route
                            path={ROUTE_PATH.POKEMON_DETIAL}
                            element={<PokemonDetail />}
                        />
                    </Route>
                </Routes>
            </AnimatePresence>
        </Suspense>
    )
}

export default Router