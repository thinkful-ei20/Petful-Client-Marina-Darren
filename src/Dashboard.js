import React from 'react';
import Pet from './Pet';
import {connect} from 'react-redux';
import {fetchCat} from './actions/cat';
import {fetchDog} from './actions/dog';


class Dashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  render() {

    return (
      <div>
        <header role='banner'>
          <h1>Petful</h1>
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