import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
          <div className="App-body">
            <Login />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
