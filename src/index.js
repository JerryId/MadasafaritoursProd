import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.min.css';
import mixpanel from 'mixpanel-browser';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.getElementById('root'));

mixpanel.init('5736b4bf2cb97d5fde82f47f4ab2acab', {debug: true}); 
mixpanel.track('Visit Madasafaritours landing page', {
  'source': "Pat's affiliate site",
  'Opted out of email': true,
});



reportWebVitals();
