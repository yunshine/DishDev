// import logo from './logo.svg';
// import './App.css';

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

// export default App;

import React, { Component } from 'react';
// import { Route, Switch, NavLink } from 'react-router-dom';
// import -something-, { -something- } from './-something-';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing App Component...</h1>
        {/* <-something- /> */}

        {/* <NavLink exact activeClassName="active-link" to="/-something-">-some-text-here-</NavLink> */}

        {/* <Switch> */}
        {/* use path="/" to assign a default page... */}
        {/* <Route exact path="/-something-" component={-something-} /> */}
        {/* <Route exact path="/-something-" component={() => <-something- name='Muffins"> } /> */}
        {/* <Route exact path="/-something-" render={() => <-something- name='Biscuit"> } /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
