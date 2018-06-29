//Receives animal props & onAdoptClick

import React from 'react';
import {connect} from 'react-redux';
import {adoptCat} from './actions/cat';
import {adoptDog} from './actions/dog';


class Pet extends React.Component {

  onAdoptClick(){
    if(this.props.type === 'cat'){
      this.props.dispatch(adoptCat());
    }
    if(this.props.type === 'dog'){
      this.props.dispatch(adoptDog());
    }
  }
  render() { 
    const error = this.props.error;
    const loading = this.props.loading;
   

    if (error && error.length) {
      return (
        <section>
          <h2>Error, please refresh</h2>
        </section>
      );
    }
    else if (loading) {
      return (
        <section>
          <h2>Loading...</h2>
        </section>
      );
    } 
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
          onClick={() => this.onAdoptClick()}
        >
          Adopt
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  if(props.type === 'cat'){
    return {
      animal: state.catReducer.cat,
      error : state.catReducer.error,
      loading : state.catReducer.loading
    };
  } 
  else if(props.type === 'dog'){
    return {
      animal: state.dogReducer.dog,
      error : state.dogReducer.error,
      loading : state.dogReducer.loading
    };
  }
};

export default connect(mapStateToProps)(Pet);

