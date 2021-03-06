import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Storypage from '../pages/Storypage';
import Adminpage from '../pages/Adminpage';
import Loginpage from '../pages/Loginpage';
import Logoutpage from '../pages/Logoutpage';
import Errorpage from '../pages/Errorpage';
import config from '../api/config';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/sensitive-cra/" exact component={Homepage} />
        <Route path="/sensitive-cra/story/:id" component={Storypage} />
        {window.innerWidth > config.desktopSize && (
          <Route path="/sensitive-cra/admin" component={Adminpage} />
        )}
        <Route path="/sensitive-cra/login" component={Loginpage} />
        <Route path="/sensitive-cra/logout" component={Logoutpage} />
        <Route component={Errorpage} />
      </Switch>
    </>
  );
};

export default Page;
