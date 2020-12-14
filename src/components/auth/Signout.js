import { signout } from "actions"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Signout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(signout())
    },[dispatch])
    
    
    return <div>Sorry to see you go</div>
}

export default Signout