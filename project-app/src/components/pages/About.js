import React from 'react';
import Avatar1 from '../images/Avatar.png'



export default function About() {
  return (

          <div class="card mb-3 " >
          <div class="row g-0 cardbackground">
            <div class="col-md-4">
              <img src={Avatar1} class="img-fluid rounded-start" alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">About me</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          </div>
  );
}
