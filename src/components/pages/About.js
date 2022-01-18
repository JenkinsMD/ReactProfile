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
                <p class="card-text">I am currently a student enrolled at OSU Coding Bootcamp.  My background is in accounting, but I have always had an interest in web development. I am taking this course to challenge my self to learn a new skillset and potentially pursue a career change.</p>
                
              </div>
            </div>
          </div>
          </div>
  );
}
