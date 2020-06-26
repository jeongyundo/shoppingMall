import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "../history"
import GlobalStyles from "./GlobalStyles";
import Main from './main/Main'
import Header from './header/Header'
import MyPage from './myPage/MyPage'
import Detail from './main/Detail'
import Cart from './myPage/Cart'
import SignIn from './sign/SignIn'
import SignUp from './sign/SignUp'
import { Footer } from './footer/Footer';

const App = () => {
  return (
    <Fragment>
      
        <Router history={history} >
          <Header></Header>
          <Switch>
              <Route path="/" exact component={Main}></Route>
              <Route path="/signup" exact component={SignUp}></Route>
              <Route path="/signin" exact component={SignIn}></Route>
              <Route path="/mypage" exact component={MyPage}></Route>
              <Route path="/cart" exact component={Cart}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              
          </Switch>
          <Footer></Footer>
        </Router>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

export default App;
