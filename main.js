
import "./style.css"
import { currentTime } from './script.js'
document.querySelector('#app').innerHTML = `
<div class="row justify-content-center bg-info p-0 ">
    <div class="container main text-center justify-content-center">
        <div class="jumbotron jumbotron-fluid rounded m-5 pt-5 text-white bg-primary">
        <div class="container">
            <h1 class="display-5">Adam M. Vaughn</h1>
            <h2 class="display-5 pb-5">Full-Stack Developer | Embedded Systems Engineer</h2>
            <p class="lead pt-5 ">"Automating a better tomorrow"</p>
        </div>
        </div>
            <div class="alert alert-success m-5" role="alert">
                <p>This resume was created using Bootstrap 4!</p>
            </div>
            <h1 class="bg-info text-white pb-2  mx-5 mb-1">My Skills</h1>
            <ul class="list-group  mx-5 mb-5">
                <!--tips: add .list-group-flush to the .list-group to remove some borders and rounded corners-->
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">Vanilla JavaScript
                <span class="badge badge-primary badge-pill">75%</span></li>
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">CSS
                <span class="badge badge-primary badge-pill">79%</span></li>
                <li class="list-group-item d-flex rounded justify-content-between align-items-center">React
                <span class="badge badge-primary badge-pill">85%</span>
                </li>
                <li class="list-group-item  d-flex rounded justify-content-between align-items-center">TypeScript
                <span class="badge badge-primary badge-pill">75%</span>
                </li>
            </ul>

                <h1 class="bg-info  text-white mx-5 mb-1">My Experience</h1>
                <div class="container justify-content-center pt-0  mt-0">          
                <div class="row">
                <div class="col-md-4 mx-">
                                <div class="card p-0 mx-4 mt-1 mb-3">
                                <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                    <div class="card-body">
                                    <h5 >AMV Embedded Systems</h5>
                                    <p>Lorem Ipsum.</p>
                                        <a href="#" class="btn btn-primary">Click Me!</a>
                                        </div>
                                        </div>
                                        </div>

                                        <div class="col-md-4 mx">
                                        <div class="card p-0 mx-4 mt-1 mb-3">
                            <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                            <div class="card-body">
                                <h5 >AMV Embedded Systems</h5>
                                <p>Lorem Ipsum.</p>
                                <a href="#" class="btn btn-primary">Click Me!</a>
                                </div>
                                </div>
                                </div>

                                <div class="col-md-4 mx">
                                <div class="card p-0 mx-4 mt-1 mb-3">
                                <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                <div class="card-body">
                                <h5 >AMV Embedded Systems</h5>
                                <p>Lorem Ipsum. </p>
                                <a href="#" class="btn btn-primary">Click Me!</a>
                                </div>
                                </div>
                                </div>
                                </div>

                                <div class="row">
                                <div class="col-md-4 mx">
                                <div class="card p-0 mx-4 mt-1 mb-3">
                                    <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                    <div class="card-body">
                                    <h5 >AMV Embedded Systems</h5>
                                    <p>Lorem Ipsum. </p>
                                    <a href="#" class="btn btn-primary">Click Me!</a>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-4 mx">
                                    <div class="card p-0 mx-4 mt-1 mb-3">
                                    <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                    <div class="card-body">
                                    <h5 >AMV Embedded Systems</h5>
                                    <p>Lorem Ipsum. </p>
                                    <a href="#" class="btn btn-primary">Click Me!</a>
                                    </div>
                                    </div>
                                    </div>

                                    <div class="col-md-4 mx">
                                    <div class="card p-0 mx-4 mt-1 mb-3">
                                            <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                            <div class="card-body">
                                            <h5 >AMV Embedded Systems</h5>
                                            <p>Lorem Ipsum. </p>
                                            <a href="#" class="btn btn-primary">Click Me!</a>
                                            </div>
                                            </div>
                                            </div>
                                            </div>

                                            <div class="row">
                                            <div class="col-md-4 mx">
                                            <div class="card p-0 mx-4 mt-1 mb-3">
                                            <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                            <div class="card-body">
                                            <h5 >AMV Embedded Systems</h5>
                                            <p>Lorem Ipsum. </p>
                                            <a href="#" class="btn btn-primary">Click Me!</a>
                                            </div>
                                            </div>
                                            </div>

                                            <div class="col-md-4 mx">
                                                <div class="card p-0 mx-4 mt-1 mb-3">
                                                <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                                <div class="card-body">
                                                <h5 >AMV Embedded Systems</h5>
                                                <p>Lorem Ipsum. </p>
                                                <a href="#" class="btn btn-primary">Click Me!</a>
                                                </div>
                                                </div>
                                                </div>

                                            <div class="col-md-4 mx">
                                                <div class="card p-0 mx-4 mt-1 mb-3">
                                                <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                                <div class="card-body">
                                                <h5 >AMV Embedded Systems</h5>
                                                <p>Lorem Ipsum. </p>
                                                <a href="#" class="btn btn-primary">Click Me!</a>
                                                </div>
                                                </div>
                                                </div>
                                                </div>                                               
                                                </div>

                                                <div class="jumbotron jumbotron-fluid rounded mx-5 mt-4 bg-primary text-white">
                                                <div class="container mt-0 text-center">
                                                <p class="lead font-weight-bold text-align-center">Adam M. Vaughn</p>
                                                <p id="time" class="lead pt-0 mt-0">${currentTime}</p>
                                                </div>
                                                </div>
                                                </div>

                                    </div>                                   
                                    ` 

                                    document.getElementById("time").innerHTML = `Birmingham, AL &copy; ${currentTime()}`;