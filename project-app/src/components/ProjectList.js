import React from "react"
import Project from "./Project"
import Bitcoin1 from "./images/Bitcoin1.JPG"
import Fitnesstracker1 from "./images/Fitnesstracker1.JPG"
import Schedule from "./images/WorkDayScheduler1.JPG"
import Music from "./images/MusicClub1.JPG"
import Dashboard from "./images/Weathertracker1.JPG"
import BookSearch from "./images/BookSearch1.JPG"

function ProjectList() {

const projects = [
    {
        id:1,
        title: "Workout Tracker",
        subjects: "NoSQL",
        githubDep: "https://mj-workout-tracker.herokuapp.com/",
        githubRepo: "https://github.com/JenkinsMD/WorkoutTracker",
        image: Fitnesstracker1
        
    },
    {
        id:2,
        title: "Bitcoinhub",
        subjects: "API",
        githubDep: "https://jenkinsmd.github.io/GrpPrj1-Bitcoin",
        githubRepo: "https://github.com/JenkinsMD/GrpPrj1-Bitcoin",
        image: Bitcoin1
    },
    {
        id:3,
        title: "Work Day Scheduler",
        subjects: "API",
        githubDep: "https://jenkinsmd.github.io/HW5-Schedule/",
        githubRepo: "https://github.com/JenkinsMD/HW5-Schedule",
        image: Schedule
    },
    {
        id:4,
        title: "Music Review Club",
        subjects: "MVC",
        githubDep: "https://music-review-club.herokuapp.com/",
        githubRepo: "https://github.com/lydiawdesign/music-review-club",
        image: Music
    },
    {
        id:5,
        title: "Weather Dashboard",
        subjects: "API",
        githubDep: "https://jenkinsmd.github.io/HW6-Dashboard/",
        githubRepo: "https://github.com/JenkinsMD/HW6-Dashboard",
        image: Dashboard
    },
    {
        id:6,
        title: "Book Search",
        subjects: "MERN",
        githubDep: "https://mj-booksearch.herokuapp.com/",
        githubRepo: "https://github.com/JenkinsMD/BookSearchEngine",
        image: BookSearch
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