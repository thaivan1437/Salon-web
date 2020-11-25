import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/bootstrap.min.css';
import './static/css/style.css';
import './static/css/progress.css';
import './static/css/style.css';
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/Information/PrivacyPolicy";
import TermsOfUse from "./Pages/Information/TermsOfUse";
import Help from "./Pages/Information/Help";
import Eula from "./Pages/Information/Eula";
import EulaIOS from "./Pages/Information/EulaIOS";
import EulaAndroid from "./Pages/Information/EulaAndroid";
import AppScreenshots from "./Pages/AppScreenshots";
import {config} from './helper/get_config';

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
if (path) {
    history.replace(path);
}

// if (config.env !== 'local') {
//   Sentry.init({
//     dsn: config.SENTRY_URL,
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: 1.0,
//     environment: config.env,
//   });
// }

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/privacy-policy'  component={PrivacyPolicy} />
          <Route exact path='/terms-of-use'  component={TermsOfUse}  />
          <Route exact path='/help'  component={Help} />
          <Route exact path='/eula'  component={Eula} />
          <Route exact path='/eula/ios'  component={EulaIOS} />
          <Route exact path='/eula/android'  component={EulaAndroid} />
          <Route exact path='/app-screenshots'  component={AppScreenshots} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
