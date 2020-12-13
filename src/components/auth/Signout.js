import { signout } from "actions"
import { useDispatch } from "react-redux"

const Signout = () => {
    const dispatch = useDispatch()
    dispatch(signout())
    
    return <div>Sorry to see you go</div>
}

export default Signout