import React from 'react'
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <Container
            py='1.5rem'
            boxShadow='container'
            pos='relative'
            overflowX='hidden'
            minH='100vh'
        >
            <Outlet />
        </Container>
    )
}

export default Layout
