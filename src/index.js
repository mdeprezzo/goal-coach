import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';
import { userHasAlreadySignIn } from './actions';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

store.dispatch(userHasAlreadySignIn({ router: browserHistory }));

ReactDOM.render(
 <Provider store={store}>	 
  <Router history={browserHistory}>
   <Route path="/app" component={App} />
   <Route path="signin" component={SignIn} />
   <Route path="signup" component={SignUp} />  
  </Router>
 </Provider>,
 document.getElementById('root')
);