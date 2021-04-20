import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBarTop from './appBarTop/AppBarTop'
import SignIn from './signIn/SignIn'
import NoteList from './notes/NoteList';
import SingleNote from './notes/SingleNote';
import CreateNote from './notes/CreateNote'
import AppBarBottom from './BottomNavigationBar/BottomNavigationBar'

import View from './View'

const Main = () => {
  return (
    <View style='mainContainer'>
      <AppBarTop />
      <Switch>
        <Route path="/notelist" exact>
          <NoteList />
        </Route>
        <Route path="/notelist/:id" exact>
          <SingleNote />
        </Route>
        <Route path="/createnote" exact>
          <CreateNote />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/signin" exact />
      </Switch>
      <AppBarBottom />
    </View>
  );
};

export default Main;