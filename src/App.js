import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SplashScreen } from './components/SplashScreen';
import { Add } from './components/Add';
import { Card } from './components/Card';
import { Update } from './components/Update';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <SplashScreen />
      <Add />
      <Card />
      <Update />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
