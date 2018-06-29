//Receives animal props & onAdoptClick

import React from 'react';

class Pet extends React.Component {
  render() {
    return (
      <section>
        <header>
          <img
            src={this.props.animal.imageURL}
            alt={this.props.animal.imageDescription}
          />
          <h2>{this.props.animal.name}</h2>
        </header>
        <dl>
          <dt>Sex:</dt>
          <dd>{this.props.animal.sex}</dd>
          <dt>Age:</dt>
          <dd>{this.props.animal.age}</dd>
          <dt>Breed:</dt>
          <dd>{this.props.animal.breed}</dd>
          <dt>Story:</dt>
          <dd>{this.props.animal.story}</dd>
        </dl>
        <button 
          onClick={this.props.onAdoptClick}
        >
          Adopt
        </button>
      </section>
    );
  }
}

export default Pet;