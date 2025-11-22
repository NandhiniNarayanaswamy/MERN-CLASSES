import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/Store';
/*<Provider> connects React to the Redux store.
Without <Provider>, your React components cannot access:
the store
the state
the dispatch function
So hooks like useSelector() and useDispatch() will NOT work unless the component is inside a <Provider>.
if the teacher (Provider) is missing →
no student can use the backpack.
🧬 What Provider actually does?
📌 Provider:
Takes your Redux store
Makes it available to all components inside App
Using React’s internal Context API 
Everything works only because Provider connected React and Redux.
🎯 In one sentence:
👉 We wrap <App /> in <Provider> so all components can access the Redux store.*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
