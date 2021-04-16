import React from 'react';
import AppBarTop from './appBarTop/AppBarTop'
import NoteList from './notes/NoteList';
import AppBarBottom from './BottomNavigationBar/BottomNavigationBar'

import View from './View'

const Main = () => {
  return (
      <View style='mainContainer'>       
        <AppBarTop />
        <NoteList />
        <AppBarBottom />
      </View>
  );
};

export default Main;