import React from "react";



function Project({project}) {
    return (
        // <div>
        //     <p>{project.title}</p>
        //     <p>{project.id}</p>
        //     {/* <img src={project.image} alt="Blah" ></img> */}
        //     <img src={project.image}></img>
        //     <button>Repo</button>

        // </div>
        <div class="col-12 col-md-6 col-lg-4"> 
          <div class="card ">
            <img class="card-img-top" src={project.image} alt="Card image cap" width="200px" height="200px"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              <a class="btn btn-primary" href="#" role="button">Link</a> <a class="btn btn-primary" href="#" role="button">Link</a>
            </div>
        </div>

        <div class="card text-dark">
          <img class="card-img" src={project.image} alt="Card image"></img>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title  <a class="btn btn-secondary btn-sm" href="#" role="button">Link</a> <a class="btn btn-secondary btn-sm" href="#" role="button">Link</a></h5>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>



        </div>
    

    )

}
export default Project