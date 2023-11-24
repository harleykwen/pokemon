import { Router as ReactRouter } from 'react-router-dom'
import { Update, createBrowserHistory } from 'history'
import { 
    useLayoutEffect, 
    useState, 
    startTransition, 
    ReactNode, 
} from 'react'

/**
 * This component responsible to fallback the route
 */

type RouteProviderProps = {
    basename?: string
    children: ReactNode
}

const history = createBrowserHistory()

const RouteProvider: React.FC<RouteProviderProps> = (props: RouteProviderProps) => {
    const { basename, children } = props

    const [routeState, setRouteState] = useState({
        action: history.action,
        location: history.location,
    })

    useLayoutEffect(() => {
        history.listen((update: Update) => {
            startTransition(() => {
                setRouteState(update)
            })
        })
    }, [history])

    return (
        <ReactRouter
            basename={basename}
            location={routeState.location}
            navigationType={routeState.action}
            navigator={history}
        >
            {children}
        </ReactRouter>
    )
}

export default RouteProvider
