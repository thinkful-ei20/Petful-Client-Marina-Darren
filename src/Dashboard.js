import React from 'react';
import Pet from './Pet';
import {connect} from 'react-redux';
import {fetchCat} from './actions/cat';
import {fetchDog} from './actions/dog';
import './dashboard.css';


class Dashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  render() {

    return (
      <div>
        <header role='banner' id='title'>
          <h1>Petful</h1>
          <p>We are a first in, first out adoption center. This means
            you can only adopt the pets that have been here the longest!
            Choose between the current cat or dog to provide a loving
            home to an animal in need. 
          </p>
        </header>
        <main>
          {/* catToAdopt Section */}
          <Pet type='cat'/>

          {/* dogToAdopt Section */}
          <Pet type='dog' />
        </main>
      </div>
    );

  }
}

export default connect()(Dashboard);