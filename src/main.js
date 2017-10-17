import React, { Component } from 'react';
import './App.css';
import './info.txt';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log("props", this.props.data.restaurants);
    return(
      <div>
      <h1>Main</h1>
      <ul>
        {this.props.data.restaurants.map((eatery, i) => {
          return(
            <li key={i}>
            <img src={eatery.backgroundImageURL} />
            {eatery.name}
          -----{eatery.category}
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Main;
