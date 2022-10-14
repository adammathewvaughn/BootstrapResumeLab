// import "./scss/custom.scss"
import { innovateDiv } from './script.js'
import { currentTime, bashDiv, riscDiv, logoDiv, rpiDiv, pythonDiv, vueDiv, ciscoDiv, dbDiv } from './script.js'

import "./style.css"
import innovate from "./assets/innovate-birmingham-logo.jpg"
import logo from "./assets/logo.png"
import risc from "./assets/RISCV_GlobalForum_2020_PromoGraphics_SchedIcon_bGR6MfG-444668996.png"
import python from "./assets/512x512bb-40407385.jpeg" 
import rpi from "./assets/raspberry-pi-logo-HD1-4225683513.jpeg"
import vue from "./assets/vuelogo.png"
import bash from "./assets/1800px-gnu_bash_logo-1024x705-1556253469.png"
import db from "./assets/Mix_color_5__dwg-1024-3202780424.png"
import cisco from "./assets/CISCO-example-560868577.png"
import vite from "./assets/vite.svg"
import bootstrap from "./assets/bootstrap-logo-shadow.png"
import headshot from "./assets/headshotcropped.jpg"
import sass from "./assets/sass.png"

document.querySelector('#app').innerHTML = `
<div class="row justify-content-center bg-primary p-1  mt-0 border-success">
    <div class="container main border border-dark text-center justify-content-center">
    <div class="alert bg-info mx-5 pt-0 pb-2 mt-1 mb-3 border-success text-white" role="alert">
        <p class=" bg-info my-0 py-0 ">This resume was created using</p>
        <h5 class="bg-info">Bootstrap 4, SASS, and ViteJS!</h5>
        <span class="bg-info my-0 pt-0 "> <img src="${bootstrap}" class="bg-info"/> <img src="${sass}" class="ml-4 pl-4" class="bg-info" /> <img src="${vite}" class="pl-3 ml-5 pr-0 mr-0 bg-info "/> </span>
    </div>
        <div class="jumbotron jumbotron-fluid  border border-dark rounded mx-5 mb-5 mt-2 pt-5 text-white bg-info">
        <div class="container p px-0 mx-0">
            <h1 class="display-5 mb-0 bg-info">Adam Mathew Vaughn</h1>
            <h2 class="display-5 mb-0 pb-2 bg-info">Full-Stack Developer | Embedded Systems Engineer</h2>
            <img id= "headshot" class=" img-fluid border border-dark rounded-circle" src="${headshot}" />
            <p class="lead pt-3 m-0 bg-info p-0">"Automating a better tomorrow"</p>
        </div>
        </div>
        <h1 class="bg-info border border-dark rounded text-white  mx-5 mb-1">My Skills</h1>
        <div class="d-xl-inline-flex justify-content-center align-items-center my-0 mx-5 p-0 pb-4">
        
          
            <ul class=" mx-0 px-0">
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">HTML
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">CSS
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Bootstrap
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">SASS           
                    </li>
                </ul>
                <ul class=" mx-0 px-0">
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Vanilla JavaScript
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">JQuery 
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">ExpressJS
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">NodeJS
                    </li>
                </ul>
                <ul class=" mx-0 px-0">
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">ReactJS
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">API Management
                    </>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">TypeScript
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">SQL
                    </li>
                </ul>
                <ul class=" mx-0 px-0">
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Git
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">React Native
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Hosting/Deployment
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Embedded Systems
                    </li>
                </ul>
                <ul class=" mx-0 px-0">
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Cisco Networking
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Bash Scripting
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">VueJS
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Python
                    </li>
                </ul>
                <ul class=" mx-0 px-0">
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Google Cloud
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Amazon Web Services
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Docker
                    </li>
                    <li class="list-group-item m-0  d-flex rounded justify-content-center align-items-center">Kubernetes
                    </li>
                </ul>
        </div>
   
                    <h1 class="bg-info border border-dark rounded text-white mx-5 mb-1">My Experience</h1>
                    <div class="container justify-content-center pt-0  mt-0">          
                    <div class="row">
                    
                    <div class="col-md-4 p-0">
                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark rounded" id="innovateCard">
                    <img src=${innovate} class="card-img-top border border-dark" alt="Innovate Birmingham Logo"/>
                    <div class="card-body border-top border-dark bg-info text-white">
                    <h5 >Innovate Birmingham </h5>
                    <p>Full-Stack Development Bootcamp</p>
                    </div>
                    </div>
                    </div>
                    
                    <div class="col-md-4 p-0">
                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark rounded" id="logoCard">
                    <img src=${logo} class="card-img-top border border-dark" alt="AMV Embedded Systems Logo"/>
                    <div class="card-body border-top border-dark bg-info text-white">
                    <h5>AMV Embedded Systems</h5>
                    <p class="mb-0 pb-0">AMV Embedded Systems</p>
                    <p class="mt-0 pt-0">"Automating A Better Tomorrow"</p>
                    </div>
                    </div>
                    </div>
                    
                    <div class="col-md-4 p-0">
                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark rounded" id="riscCard">
                    <img src=${risc} class="card-img-top border border-dark" alt="Risc-V Logo"/>
                    <div class="card-body border-top border-dark bg-info text-white">
                    <h5 >RISC-V Architecture</h5>
                    <p>Reduced Instruction Set Computer Architecture</p>
                    </div>
                    </div>
                    </div>
                    </div>
                                    <div class="row">
                                    <div class="col-md-4 p-0">
                                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark" id="pythonCard">
                                        <img src=${python} class="card-img-top border border-dark" alt="Python Programming Language Logo"/>
                                        <div class="card-body border-top border-dark bg-info text-white">
                                        <h5 >Python Programming</h5>
                                        <p>"A high-level, general-purpose programming language"</p>
                                        </div>
                                        </div>
                                        </div>
                                        <div class="col-md-4 p-0">
                                        <div class="card p-0 mx-5 mt-1 mb-4 border-dark" id="rpiCard">
                                        <img src=${rpi} class="card-img-top border border-dark" alt="Raspberry Pi Logo"/>
                                        <div class="card-body border-top border-dark bg-info text-white">
                                        <h5 >Raspberry Pi</h5>
                                        <p>"The Big Computer That Fits In Your Hand"</p>
                                        </div>
                                        </div>
                                        </div>
                                        <div class="col-md-4 p-0">
                                        <div class="card p-0 mx-5 mt-1 mb-4 border-dark" id="vueCard">
                                                <img src=${vue} class="card-img-top border border-dark" alt="VueJS Logo"/>
                                                <div class="card-body border-top border-dark bg-info text-white">
                                                <h5 >VueJS</h5>
                                                <p>"The Progressive JavaScript Framework"</p>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <div class="row">
                                                <div class="col-md-4 p-0">
                                                <div class="card p-0 mx-5 mt-1 mb-4 border-dark" id="bashCard">
                                                <img src=${bash} class="card-img-top border border-dark" alt="Bash Shell Logo"/>
                                                <div class="card-body border-top border-dark bg-info text-white">
                                                <h5>Bash Scripting</h5>
                                                <p>"The GNU Project's Bourne Again SHell"</p>
                                                </div>
                                                </div>
                                                </div>
                                                <div class="col-md-4 p-0">
                                                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark" id="dbCard">
                                                    <img src=${db} class="card-img-top border border-dark" alt="Database Symbol"/>
                                                    <div class="card-body border-top border-dark bg-info text-white">
                                                    <h5 >Database Management</h5>
                                                    <p>Database Management And SQL Programming</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                <div class="col-md-4 p-0">
                                                    <div class="card p-0 mx-5 mt-1 mb-4 border border-dark" id="ciscoCard">
                                                    <img src=${cisco} class="card-img-top border border-dark" alt="Cisco Network Topology"/>
                                                    <div class="card-body bg-info border-top border-dark text-white ">
                                                    <h5 >Cisco Network Admin.</h5>
                                                    <p>Cisco Networking Concepts And Methodologies</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>                                               
                                                    </div>
                                                    <div class="jumbotron jumbotron-fluid border border-dark rounded mx-5 mt-4 bg-info text-white ">
                                                    <div class="container mt-0 text-center">
                                                    <p class="lead font-weight-bold text-align-center">Adam Mathew Vaughn</p>
                                                    <p id="time" class="lead pt-0 mt-0"></p>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>                                   
                                        ` 
                                        document.getElementById("time").innerHTML = `Birmingham, AL &copy; ${currentTime()}`;
                                        document.getElementById("innovateCard").onclick = innovateDiv
                                        document.getElementById("logoCard").onclick = logoDiv
                                        document.getElementById("riscCard").onclick = riscDiv
                                        document.getElementById("pythonCard").onclick = pythonDiv
                                        document.getElementById("rpiCard").onclick = rpiDiv
                                        document.getElementById("vueCard").onclick = vueDiv
                                        document.getElementById("bashCard").onclick = bashDiv
                                        document.getElementById("dbCard").onclick = dbDiv
                                        document.getElementById("ciscoCard").onclick = ciscoDiv
