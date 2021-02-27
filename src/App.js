import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAccountComponent from './components/ListAccountComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAccountComponent from './components/CreateAccountComponent';
import UpdateAccountComponent from './components/UpdateAccountComponent';
// import ViewAccountComponent from './components/ViewAccountComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAccountComponent}></Route>
                          <Route path = "/Accounts" component = {ListAccountComponent}></Route>
                          <Route path = "/createAccount/:id" component = {CreateAccountComponent}></Route>
                          {/* <Route path = "/view-Account/:id" component = {ViewAccountComponent}></Route> */}
                          <Route path = "/updateAccount/:id" component = {UpdateAccountComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


