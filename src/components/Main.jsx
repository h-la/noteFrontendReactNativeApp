import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBarTop from './appBarTop/AppBarTop'
import SignIn from './signIn/SignIn'

import NoteList from './notes/NoteList';
import SingleNote from './notes/SingleNote';
import CreateNote from './notes/CreateNote'
import UpdateNote from './notes/UpdateNote'

import BookList from './books/BookList';

import PodcastList from './podcasts/PodcastList';

import VideoList from './videos/VideoList';

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
        <Route path="/notelist/updatenote/:id" exact>
          <UpdateNote />
        </Route>
        <Route path="/createnote" exact>
          <CreateNote />
        </Route>
        <Route path="/booklist" exact>
          <BookList />
        </Route>
        <Route path="/podcastlist" exact>
          <PodcastList />
        </Route>
        <Route path="/videolist" exact>
          <VideoList />
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