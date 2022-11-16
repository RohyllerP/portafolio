import React, {Fragment, useState} from 'react';
import Navbar from './layout/navbar';
import Main from './pages/main';

function App(){
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
    </Fragment>
  )
}
export default App;