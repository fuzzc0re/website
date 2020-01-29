import React, { Suspense, lazy } from 'react';
import { withRouter, Route, Switch, useLocation } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useGlobalState } from '../../hooks/useState/global';

const Landing = lazy(() => import('../routes/Landing'));
const About = lazy(() => import('../routes/About'));
const Academic = lazy(() => import('../routes/Academic'));
const Tech = lazy(() => import('../routes/Tech'));
const Contact = lazy(() => import('../routes/Contact'));
const PageNotFound = lazy(() => import('../routes/PageNotFound'));

const Routes = () => {
  const { setTitle } = useGlobalState();
  const location = useLocation();
  switch (location.pathname) {
    case '/':
      setTitle("[Name]'s Website");
      break;
    case '/about':
      setTitle('About Me');
      break;
    case '/academic':
      setTitle('Academic Stuff');
      break;
    case '/tech':
      setTitle('Tech Stuff');
      break;
    case '/contact':
      setTitle('Contact Info');
      break;
    default:
      setTitle('Page Not Found');
      break;
  }
  return (
    <Suspense fallback={<LinearProgress variant='indeterminate' />}>
      <Switch location={location}>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/academic' component={Academic} />
        <Route path='/tech' component={Tech} />
        <Route path='/contact' component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default withRouter(Routes);
