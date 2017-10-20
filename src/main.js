import React, { Component } from 'react';
import './App.css';
import './info.txt';
import ic_webBack from './assets/Cuts/ic_webBack.png';
import icon_map from './assets/Cuts/icon_map.png';
import cellGradientBackground from './assets/Cuts/cellGradientBackground.png';

class Main extends Component {
  constructor(props){
    super(props);

    this.state= {
      singleItem : [],
      isActive: "inactive"
    }
  }

//document.getElementById("theInfoDiv").style.width = "300px";
//functions for grabbing an item and putting it in state as well as exiting out of the created div
  infoAndMap(eatery) {
    const currentState = this.state.active;
    this.setState({singleItem : [eatery], isActive: "active"});
  }
  exitButton(){
    console.log("clicky");
    this.setState({singleItem : [], isActive: "inactive" });
  }

//if we haven't clicked a div, show no div and show the regular full list. Otherwise, show the infoDiv for that location. infoDiv will contain contact info, social media info if any, and the map.
render(){
  let infoDiv;
  let eatery = this.state.singleItem;
  if (this.state.isActive === "active"){
    let latitude = eatery[0].location.lat;
    let longitude = eatery[0].location.lng;
    infoDiv = <div className={this.state.isActive}>
      <ul>
        <li>
        <div className="infoHeader">
          <img onClick={() => this.exitButton} src={ic_webBack}></img>
          <h2>Lunch Tyme</h2>
          <img className="mapBtn" src={icon_map}></img>
        </div>
        <iframe
          title="map"
          height="180"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src='https://maps.google.com/maps?q=+32.950787+,-96.821118&hl=es;z=14&amp;output=embed&key=AIzaSyBX3Z00EKGNzw9butbHQhUnsv2xIW3Y9GE'
          >
          </iframe>
          <div className="title">{eatery[0].name}</div>
          <div className="titleTwo">{eatery[0].category}</div>
          <div className="titleThree">
            {eatery[0].location.address}
            <br></br>
            {eatery[0].location.city}, {eatery[0].location.state} {eatery[0].location.postalCode}
          </div>
          <div className="titleFive">{eatery[0].contact.formattedPhone}</div>
          <div className="titleSix">@{eatery[0].contact.twitter}</div>
        </li>
        </ul>
    </div>
  } else {
    console.log("info div is null")
    console.log(this.state.singleItem)
    infoDiv = null;
  }
  return(
    <div className="outsideDiv">
      <div className="mainContent">
        <ul>
          {this.props.data.restaurants.map((eatery, i) => {
            return(
              <li onClick={() => this.infoAndMap(eatery)} className="fullItem" key={i}>
                <img className="gradient" src={cellGradientBackground} alt={eatery.name} />
                <img src={eatery.backgroundImageURL} alt={eatery.name} />
                <div className="wordContainer">
                  <div className="itemTierOne">{eatery.name}</div>
                  <div className="itemTierTwo">{eatery.category}</div>
                  </div>
              </li>
            )
          })}
        </ul>
      </div>
      {infoDiv}
    </div>
  )
}


}

export default Main;
