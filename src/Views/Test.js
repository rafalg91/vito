import React from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'

const Test = () => (
  <>
    <NavLink to="/blog/test" />
    <Switch>
      <Route path="/blog/test">
        wooow
      </Route>
    </Switch>
  </>
)

export default Test