import React, { Component } from 'react';
import './App.css';
import './info.txt';

// this functional component is for the info popup on click
//map will be centered on the lat and lng from the data given for each.

function Info() {

  render(){
    return(
      <div className="absolute">
        <ul>
          <li>
            <iframe
              width="600"
              height="450"
              frameborder="0" style="border:0"
              ?key=AIzaSyBX3Z00EKGNzw9butbHQhUnsv2xIW3Y9GE
              &center={eatery.lat},{eatery.lng}
            </iframe>

            <div className="itemTierOne">{eatery.name}</div>
            <div className="itemTierTwo">{eatery.category}</div>
            <div>{eatery.address}</div>
            <div>{eatery.city}, {eatery.state} {eatery.postalCode}</div>
            <div>{eatery.formattedPhone}</div>
            <div>@{eatery.twitter}</div>
          </li>
          </ul>
      </div>
    )
  }
}

export default Info;
