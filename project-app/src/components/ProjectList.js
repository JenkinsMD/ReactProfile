import React from "react"
import Project from "./Project"
import temp1 from "./images/temp1.jpg"
import temp2 from "./images/temp2.jpg"


function ProjectList() {

const projects = [
    {
        id:1,
        title: "Workout Tracker",
        subjects: "Node",
        githubDep: "github deployed",
        githubRepo: "github repo",
        image: temp1

    },
    {
        id:2,
        title: "Bitcoinhub",
        subjects: "Node",
        githubDep: "github deployed",
        githubRepo: "github repo",
        image: temp2
    }

]


    const projectExamples = projects.map(project=> (
        console.log({project}),
        <Project key={project.id}  project={project}></Project>
        ))

    return (<div>
        <h2>Portfolio</h2>
        <div class="container ">
            <div class="row">
            {projectExamples}
            </div>
            

        </div>
    </div>) 
        
}

export default ProjectList