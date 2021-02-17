import { Redirect, Route } from 'react-router-dom'
import ROUTES from '../index'

function ProtectedRoute({ component: Component, valid, ...rest }) {
  return (
    <Route {...rest}
      render={props => (
        valid ? <Component {...rest} /> : <Redirect to={{ pathname: ROUTES.LOGIN, state: { from: props.location } }} />
      )} />
  )
}

export default ProtectedRoute