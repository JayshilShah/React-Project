import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/store'
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import DoughnutContainer from './Components/DoughnutContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1 className='header'>Bakery Shop</h1>
        <table>
          <tr>
            <td>
              <CakeContainer /> 
            </td>
            <td>
              <IceCreamContainer />
            </td>
            <td>
              <DoughnutContainer />
            </td>
          </tr>
        </table>
      </div>
    </Provider>
  );
}

export default App;
