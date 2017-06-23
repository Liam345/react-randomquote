import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOUnV8vRwpwc8AiUBKDwlnaupQSZWQaJ0",
    authDomain: "randomquote-react.firebaseapp.com",
    databaseURL: "https://randomquote-react.firebaseio.com",
    projectId: "randomquote-react",
    storageBucket: "randomquote-react.appspot.com",
    messagingSenderId: "726805936403"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
