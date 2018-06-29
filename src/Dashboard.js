//Takes two props - 
// catToAdopt & dogToAdopt

import React from 'react';

class Dashboard extends React.Component {

  render() {

    return (
      <div>
        <header role='banner'>
          <h1>Petful</h1>
        </header>
        <main>
          {/* catToAdopt Section */}
          <section>
            <header>
              <img
                src={this.props.catToAdopt.imageURL}
                alt={this.props.catToAdopt.imageDescription}
              />
              <h2>{this.props.catToAdopt.name}</h2>
            </header>
            <dl>
              <dt>Sex:</dt>
              <dd>{this.props.catToAdopt.sex}</dd>
              <dt>Age:</dt>
              <dd>{this.props.catToAdopt.age}</dd>
              <dt>Breed:</dt>
              <dd>{this.props.catToAdopt.breed}</dd>
              <dt>Story:</dt>
              <dd>{this.props.catToAdopt.story}</dd>
            </dl>
          </section>

          {/* dogToAdopt Section */}
          <section>
            <header>
              <img
                src={this.props.dogToAdopt.imageURL}
                alt={this.props.dogToAdopt.imageDescription}
              />
              <h2>{this.props.dogToAdopt.name}</h2>
            </header>
            <dl>
              <dt>Sex:</dt>
              <dd>{this.props.dogToAdopt.sex}</dd>
              <dt>Age:</dt>
              <dd>{this.props.dogToAdopt.age}</dd>
              <dt>Breed:</dt>
              <dd>{this.props.dogToAdopt.breed}</dd>
              <dt>Story:</dt>
              <dd>{this.props.dogToAdopt.story}</dd>
            </dl>
          </section>
        </main>
      </div>
    );

  }
}

export default Dashboard;