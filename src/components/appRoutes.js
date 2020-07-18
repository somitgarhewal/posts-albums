import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Posts from './mainComponents/posts'
import Albums from './mainComponents/albums'

const AppRoutes = () => { 
  return (
    <Switch>
      <Route path="/posts" component={Posts} exact/>
      <Route path="/albums" component={Albums} exact/>
    </Switch>
  )
}

export default AppRoutes