import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SplashScreen } from './components/SplashScreen';
import { Add } from './components/Add';
import { Section } from './components/Card';
import { Update } from './components/Update';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: []
    };
  };

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    return fetch("https://wwydbackend.herokuapp.com/questions")
    .then(response => response.json())
    .then(data => {
      this.setState({ questions: data.questions })
    });
  }





  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SplashScreen />
          <Add />
          <Section questionsCard={this.state.questions} />
          <Update />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
