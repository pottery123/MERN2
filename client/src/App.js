import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShoppingList from './components/ShoppingList'
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
