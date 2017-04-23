import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import storeConfig from './store/configureStore';

import './index.css';
import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyBDN-uPePUkGXgiqUZMqxXP0l013lLHhCs",
    authDomain: "task-display-18309.firebaseapp.com",
    databaseURL: "https://task-display-18309.firebaseio.com",
    projectId: "task-display-18309",
    storageBucket: "task-display-18309.appspot.com",
    messagingSenderId: "578190541091"
  };
  firebase.initializeApp(config);


const store = storeConfig();

ReactDOM.render(
	<Provider store ={store}>
 		 <App/>
 	</Provider>,

  document.getElementById('root')
);
