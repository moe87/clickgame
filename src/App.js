import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

import images from './images.json';
import scores from './scores.json';

import './App.css';

class App extends Component {
  state = {
    images,
    scores
  };

  clicked = id => {
    this.state.images.filter(image => {return image.id === id}).forEach(image => {
      if(image.click === 0) {
        image.click += 1;
        this.state.scores.score += 1;
        if(this.state.scores.topscore < this.state.scores.score) {
        this.state.scores.topscore = this.state.scores.score;
      }
      } else if(image.click === 1) {
        this.state.scores.score = 0;
        this.state.images.forEach(image => image.click = 0);
      }
  });
  const images = this.state.images.sort(() => 0.5 - Math.random());

  this.setState({ images });
  this.setState({ scores });
  };

  render() {
    return (
        <main>
          <Navbar score={this.state.scores.score} topscore={this.state.scores.topscore}/>
          <Jumbotron />
          <div className="wrapper">
            {this.state.images.map(image => (
            <Card
              clicked={this.clicked}
              key={image.id}
              id={image.id}
              image={image.path}
              click={image.click}
            />
            ))}
          </div>
          <Footer />
        </main>
    );
  }
}

export default App;
