import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        heading: '"Poppins", sans-serif',
        body: '"Poppins", sans-serif',
        mono: '"Poppins", sans-serif',
    },
    breakpoints: {
        xs: '414px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    shadows: {
        card: 'rgba(0, 0, 0, 0.12) 0px 1px 6px 0px',
        container: '0 0 8px 4px rgba(0, 0, 0, 0.05)',
    },
    colors: {
        primary: '#00AA5B',
        primaryDarker: '#098A4E',
    },
    semanticTokens: {
        colors: {
            'chakra-body-bg': {
                _light: '#F8F8F8',
            },
            'chakra-body-text': {
                _light: '#3A3A3A',
            },
            'chakra-body-text-lighter': {
                _light: '#5F5F5F',
            },
            'scrollbar-bg': {
                _light: '#FFFFFF',
            },
            'scrollbar-thumb': {
                _light: '#AFAFAF',
            },
            textLighter: {
                _light: '#5F5F5F',
            },
        },
    },
    components: {
        Container: {
            baseStyle: {
                maxW: 'container.md',
                bg: 'white',
                px: {
                    base: '4',
                    md: '8',
                },
            },
        },
    },
})
