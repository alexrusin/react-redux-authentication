import { reduxForm, Field } from 'redux-form'
import { signin } from 'actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Signin = ({handleSubmit}) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector(({auth}) => auth.errorMessage)
    const history = useHistory()
    const onSubmit = (formProps) => {
        dispatch(signin(formProps, () => {
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
            <button type="submit">Sign In!</button>
        </form>
    )
}

export default reduxForm({form: 'signin'})(Signin)