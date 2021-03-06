import 'angular';
import 'bootstrap/dist/css/bootstrap.css';

// routes
import './app.route';

// import css here
import './styles/styles.css';

import appModule from './app.module';

// config stuff
appModule.config($locationProvider => {
  $locationProvider.hashPrefix('');
});

// constants
appModule.constant('appVersion', VERSION);
appModule.constant('appEnv', ENV);
