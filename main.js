// import "./scss/custom.scss"
import { currentTime } from './script.js'
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


document.querySelector('#app').innerHTML = `
<div class="row justify-content-center bg-info p-0 border-success">
    <div class="container main border border-dark text-center justify-content-center">
    <div class="alert alert-success mx-5 mt-1 mb-3 border-success" role="alert">
        <p class="mb-0 pb-0 ">This resume was created using</p>
        <h5>Bootstrap 4, SASS, and ViteJS!</h5>
    </div>
        <div class="jumbotron jumbotron-fluid border border-dark rounded mx-5 mb-5 mt-2 pt-5 text-white bg-primary">
        <div class="container bg-info border border-dark rounded py-5 px-0 mx-0">
            <h1 class="display-5 mb-0 bg-info">Adam M. Vaughn</h1>
            <h2 class="display-5 mb-0 pb-5 bg-info">Full-Stack Developer | Embedded Systems Engineer</h2>
            <p class="lead pt-5 m-0 bg-info p-0">"Automating a better tomorrow"</p>
        </div>
        </div>

        <h1 class="bg-info border border-dark rounded text-white  mx-5 mb-1">My Skills</h1>

        <div class="d-xl-inline-flex justify-content-center align-items-center m-0 mx-5 p-0 pb-4">
        
          
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
                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                    <img src=${innovate} class="card-img-top border border-dark" alt="Innovate Birmingham Logo"/>
                    <div class="card-body border-top border-dark bg-info text-white">
                    <h5 >Innovate Birmingham </h5>
                    <p>Full-Stack Development Bootcamp</p>
                    <a href="https://github.com/adammathewvaughn?tab=repositories"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                    </div>
                    </div>
                    </div>
                    
                    <div class="col-md-4 p-0">
                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark rounded">
                    <img src=${logo} class="card-img-top border border-dark" alt="AMV Embedded Systems Logo"/>
                    <div class="card-body border-top border-dark bg-info text-white">
                    <h5>AMV Embedded Systems</h5>
                    <p class="mb-0 pb-0">AMV Embedded Systems</p>
                    <p class="mt-0 pt-0">"Automating A Better Tomorrow"</p>
                    <a href="https://adammathewvaughn.com"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                    </div>
                    </div>
                    </div>
                    
                    <div class="col-md-4 p-0">
                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark rounded">
                    <img src=${risc} class="card-img-top border border-dark" alt="Risc-V Logo"/>
                    <div class="card-body border-top border-dark bg-info text-white">
                    <h5 >RISC-V Architecture</h5>
                    <p>Reduced Instruction Set Computer Architecture</p>
                    <a href="https://riscv.org"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                    </div>
                    </div>
                    </div>
                    </div>

                                    <div class="row">
                                    <div class="col-md-4 p-0">
                                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                        <img src=${python} class="card-img-top border border-dark" alt="Python Programming Language Logo"/>
                                        <div class="card-body border-top border-dark bg-info text-white">
                                        <h5 >Python Programming</h5>
                                        <p>"A high-level, general-purpose programming language"</p>
                                        <a href="https://github.com/adammathewvaughn/ib_python_course"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                        </div>
                                        </div>
                                        </div>

                                        <div class="col-md-4 p-0">
                                        <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                        <img src=${rpi} class="card-img-top border border-dark" alt="Raspberry Pi Logo"/>
                                        <div class="card-body border-top border-dark bg-info text-white">
                                        <h5 >Raspberry Pi</h5>
                                        <p>"The Big Computer That Fits In Your Hand"</p>
                                        <a href="https://www.raspberrypi.com"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                        </div>
                                        </div>
                                        </div>

                                        <div class="col-md-4 p-0">
                                        <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                                <img src=${vue} class="card-img-top border border-dark" alt="VueJS Logo"/>
                                                <div class="card-body border-top border-dark bg-info text-white">
                                                <h5 >VueJS</h5>
                                                <p>"The Progressive JavaScript Framework"</p>
                                                <a href="https://vuejs.org"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                                </div>
                                                </div>
                                                </div>
                                                </div>

                                                <div class="row">
                                                <div class="col-md-4 p-0">
                                                <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                                <img src=${bash} class="card-img-top border border-dark" alt="Bash Shell Logo"/>
                                                <div class="card-body border-top border-dark bg-info text-white">
                                                <h5>Bash Scripting</h5>
                                                <p>"The GNU Project's Bourne Again SHell"</p>
                                                <a href="https://github.com/adammathewvaughn/Bash"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                                </div>
                                                </div>
                                                </div>

                                                <div class="col-md-4 p-0">
                                                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                                    <img src=${db} class="card-img-top border border-dark" alt="Database Symbol"/>
                                                    <div class="card-body border-top border-dark bg-info text-white">
                                                    <h5 >Database Management</h5>
                                                    <p>Database Management And SQL Programming</p>
                                                    <a href="https://adammathewvaughn.com"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                                    </div>
                                                    </div>
                                                    </div>

                                                <div class="col-md-4 p-0">
                                                    <div class="card p-0 mx-5 mt-1 mb-4 border border-dark">
                                                    <img src=${cisco} class="card-img-top border border-dark" alt="Cisco Network Topology"/>
                                                    <div class="card-body bg-info border-top border-dark text-white ">
                                                    <h5 >Cisco Network Admin.</h5>
                                                    <p>Cisco Networking Concepts And Methodologies</p>
                                                    <a href="https://adammathewvaughn.com"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>                                               
                                                    </div>

                                                    <div class="jumbotron jumbotron-fluid border border-dark rounded mx-5 mt-4 bg-primary text-white ">
                                                    <div class="container mt-0 text-center">
                                                    <p class="lead font-weight-bold text-align-center">Adam Mathew Vaughn</p>
                                                    <p id="time" class="lead pt-0 mt-0">${currentTime}</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>                                   
                                        ` 
                                        document.getElementById("time").innerHTML = `Birmingham, AL &copy; ${currentTime()}`;