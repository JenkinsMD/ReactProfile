import React from "react";




//template for project cards
function Project({project}) {
    return (
    
      <div class="col-12 col-md-6 col-lg-4 g-3"> 

        <div class="card ">
            <img class="card-img" src={project.image} alt="Card image "></img>
            <div class="card-body  card-img-overlay ">
              
              <h5 class="card-title"><span class="bg-secondary text-white">{project.title}</span></h5>
              <h6 class="card-subtitle mb-2 text-muted"><span class="bg-secondary text-white">{project.subjects}</span></h6>
            
            </div>
            <footer class="card-footer d-flex align-content-end justify-space-between">
            <a href={project.githubDep} class="card-link position-relative btn btn-secondary btn-sm " target="_blank">Deployed Page</a>  
            <a href={project.githubRepo} target="_blank" class="card-link btn btn-secondary btn-sm position-relative ">Repo</a>
           
            </footer>
        </div>
        
       </div>
    
     

    )

}
export default Project