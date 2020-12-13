import { reduxForm, Field } from 'redux-form'
import { signup } from 'actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Signup = ({handleSubmit}) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector(({auth}) => auth.errorMessage)
    const history = useHistory()
    const onSubmit = (formProps) => {
        dispatch(signup(formProps, () => {
            history.push('/feature')
        }))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <div>{errorMessage}</div>
            <button type="submit">Sign Up!</button>
        </form>
    )
}

export default reduxForm({form: 'signup'})(Signup)