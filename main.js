// import "./scss/custom.scss"
import "./style.css"
import { currentTime } from './script.js'
document.querySelector('#app').innerHTML = `
<div class="row justify-content-center bg-info p-0 border-success">
    <div class="container main border border-dark text-center justify-content-center">
    <div class="alert alert-success mx-5 mt-1 mb-3 border-success" role="alert">
        <p>This resume was created using Bootstrap 4!</p>
    </div>
        <div class="jumbotron jumbotron-fluid border border-dark rounded mx-5 mb-5 mt-2 pt-5 text-white bg-primary">
        <div class="container bg-info border border-dark rounded py-5 px-0 mx-0">
            <h1 class="display-5 mb-0 bg-info">Adam M. Vaughn</h1>
            <h2 class="display-5 mb-0 pb-5 bg-info">Full-Stack Developer | Embedded Systems Engineer</h2>
            <p class="lead pt-5 m-0 bg-info p-0">"Automating a better tomorrow"</p>
        </div>
        </div>
        <h1 class="bg-info border border-dark rounded text-white  mx-5 mb-1">My Skills</h1>
        <div class="d-flex flex-column justify-content-around mx-5  text-center">
            <ul class="d-flex flex-row ">
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">Vanilla JavaScript
                </li>
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">CSS
                </li>
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">React
                </li>
                <li class="list-group-item  d-flex rounded justify-content-between align-items-center">TypeScript               
                </li>
            </ul>
            <ul class="d-flex flex-row justify-content-between ">
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">Vanilla JavaScript
                </li>
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">CSS
                </li>
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">React
                </li>
                <li class="list-group-item  d-flex rounded justify-content-between align-items-center">TypeScript
                </li>
            </ul>
    </div>
                <h1 class="bg-info border border-dark rounded text-white mx-5 mb-1">My Experience</h1>
                <div class="container justify-content-center pt-0  mt-0">          
                <div class="row">
                
                <div class="col-md-4 p-0">
                <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                <img src="./assets/innovate-birmingham-logo.jpg" class="card-img-top border border-dark" alt="Innovate Birmingham Logo"/>
                <div class="card-body border-top border-dark bg-info text-white">
                <h5 >Innovate Birmingham </h5>
                <p>Full-Stack Development Bootcamp</p>
                <a href="https://github.com/adammathewvaughn?tab=repositories"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                </div>
                </div>
                </div>
                
                <div class="col-md-4 p-0">
                <div class="card p-0 mx-5 mt-1 mb-4 border-dark rounded">
                <img src="./assets/logo.png " class="card-img-top border border-dark" alt="AMV Embedded Systems Logo"/>
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
                <img src="./assets/RISCV_GlobalForum_2020_PromoGraphics_SchedIcon_bGR6MfG-444668996.png" class="card-img-top border border-dark" alt="Risc-V Logo"/>
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
                                    <img src="./assets/512x512bb-40407385.jpeg" class="card-img-top border border-dark" alt="Python Programming Language Logo"/>
                                    <div class="card-body border-top border-dark bg-info text-white">
                                    <h5 >Python Programming</h5>
                                    <p>"A high-level, general-purpose programming language"</p>
                                    <a href="https://github.com/adammathewvaughn/ib_python_course"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-4 p-0">
                                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                    <img src="./assets/raspberry-pi-logo-HD1-4225683513.jpeg" class="card-img-top border border-dark" alt="Raspberry Pi Logo"/>
                                    <div class="card-body border-top border-dark bg-info text-white">
                                    <h5 >Raspberry Pi</h5>
                                    <p>"The Big Computer That Fits In Your Hand"</p>
                                    <a href="https://www.raspberrypi.com"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-4 p-0">
                                    <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                            <img src="./assets/vuelogo.png" class="card-img-top border border-dark" alt="VueJS Logo"/>
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
                                            <img src="./assets/1800px-gnu_bash_logo-1024x705-1556253469.png" class="card-img-top border border-dark" alt="Bash Shell Logo"/>
                                            <div class="card-body border-top border-dark bg-info text-white">
                                            <h5>Bash Scripting</h5>
                                            <p>"The GNU Project's Bourne Again SHell"</p>
                                            <a href="https://github.com/adammathewvaughn/Bash"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                            </div>
                                            </div>
                                            </div>

                                            <div class="col-md-4 p-0">
                                                <div class="card p-0 mx-5 mt-1 mb-4 border-dark">
                                                <img src="./assets/Mix_color_5__dwg-1024-3202780424.png" class="card-img-top border border-dark" alt="Database Symbol"/>
                                                <div class="card-body border-top border-dark bg-info text-white">
                                                <h5 >Database Management</h5>
                                                <p>Database Management And SQL Programming</p>
                                                <a href="https://adammathewvaughn.com"  target="_blank" rel="noopener noreferrer" class="btn btn-primary border border-dark">Click Me!</a>
                                                </div>
                                                </div>
                                                </div>

                                            <div class="col-md-4 p-0">
                                                <div class="card p-0 mx-5 mt-1 mb-4 border border-dark">
                                                <img src="./assets/CISCO-example-560868577.png" class="card-img-top border border-dark" alt="Cisco Network Topology"/>
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