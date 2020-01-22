import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage'
import Storypage from '../pages/Storypage'
import Adminpage from '../pages/Adminpage'
import Loginpage from '../pages/Loginpage';
import Errorpage from '../pages/Errorpage';

const Page = () => {

  return (
    <>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/story/:id" component={Storypage} />
        <Route path="/admin" component={Adminpage} />
        <Route path="/login" component={Loginpage} />
        <Route component={Errorpage} />
      </Switch>
    </>
  );
}

export default Page;