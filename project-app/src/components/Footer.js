import React from "react";
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

export default function FooterMain() {

    return(
        <div class="container fixed-bottom footerbackground ">
        <footer class="text-center">
           <a href="https://github.com/JenkinsMD" target="_blank"> <FaGithub size="2em" color="black"/></a> 
           <a href="https://www.linkedin.com/" target="_blank"> <FaLinkedin size="2em" color="black"/></a> 
            <a href="https://www.instagram.com/beardedmcnugget/" target="_blank"> <FaInstagram size="2em" color="black"/></a> 

        </footer>

    </div>
    )
   
   
}