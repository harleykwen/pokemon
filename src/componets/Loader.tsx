import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

const Loader: React.FC = () => {
    return (
        <Center
            w='100%'
            h='50vh'
        >
            <Spinner
                w='75px'
                h='75px'
                color='primary'
            />
        </Center>
    )
}

export default Loader