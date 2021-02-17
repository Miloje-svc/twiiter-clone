/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux'
import ROUTES, { ProtectedRoute } from './routes'
import { Switch, Route } from 'react-router-dom'
import { Home, LogIn } from './pages'
import { GlobalStyle } from './assets'
import { useEffect } from 'react'
import { TYPES } from './state'
import { auth } from './firebase'

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: TYPES.USER,
          user: authUser
        })
      } else {
        dispatch({ type: TYPES.NO_USER })
      }
    })
  }, [])

  console.log(user)

  return (
    <>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={LogIn} />
        <ProtectedRoute exact valid={true} path={ROUTES.HOME} component={Home} />
      </Switch>
      <GlobalStyle />
    </>
  )
}

export default App
