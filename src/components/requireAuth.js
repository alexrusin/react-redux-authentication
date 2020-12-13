import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const requireAuth = (ChildComponent) => {
    const ComposedComponent = (props) => {
        const history = useHistory()
        const authenticated = useSelector(({auth}) => auth.authenticated)

        useEffect(() => {
            if(!authenticated) {
                history.push('/')
            }
        }, [authenticated, history])

        return (
            <ChildComponent {...props} />
        )
    }

    return ComposedComponent
}

export default requireAuth