import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage'
import Storypage from '../pages/Storypage'
import Adminpage from '../pages/Adminpage'
import Loginpage from '../pages/Loginpage';
import Errorpage from '../pages/Errorpage';

const originalPath = window.location.pathname;

const Page = () => {

  return (
    <>
      <Switch>
        <Route path={`${originalPath}`} exact component={Homepage} />
        <Route path={`${originalPath}story/:id`} component={Storypage} />
        <Route path={`${originalPath}admin`} component={Adminpage} />
        <Route path={`${originalPath}login`} component={Loginpage} />
        <Route component={Errorpage} />
      </Switch>
    </>
  );
}

export default Page;