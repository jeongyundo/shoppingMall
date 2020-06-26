import React, {Fragment} from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "../history"
import GlobalStyles from "./GlobalStyles";
import Main from './main/Main'
import Header from './header/Header'

function App() {
  return (
    <Fragment>
        <Router history={history} >
        <Header></Header>
              <Switch>
                  <Route path="/" exact component = {Main}></Route>
                  <Route path="/signup" exact component = {Main}></Route>
                  <Route path="/signin" exact component = {Main}></Route>
                  <Route path="/mypage" exact component = {Main}></Route>
                  <Route path="/cart" exact component = {Main}></Route>
              </Switch>
      </Router>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

export default App;
