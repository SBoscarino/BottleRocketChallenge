import React, { Component } from 'react';
import './App.css';
import './info.txt';

class Main extends Component {
  constructor(props){
    super(props);

     this.InfoAndMap = this.InfoAndMap.bind(this);
  }

  InfoAndMap(eatery) {
    console.log(eatery);
  }

  render(){
    console.log("props", this.props.data.restaurants);
    return(
      <div className="absolute">
      <ul>
        {this.props.data.restaurants.map((eatery, i) => {
          return(
            <li onClick={() => this.InfoAndMap(eatery)} className="fullItem" key={i}>
              <img src={eatery.backgroundImageURL} alt={eatery.name} />
              <img src="cellGradientBackground@2x.png" alt={eatery.name} />
              <div className="itemTierOne">{eatery.name}</div>
              <div className="itemTierTwo">{eatery.category}</div>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Main;
