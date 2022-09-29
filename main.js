

import { currentTime } from './script.js'
document.querySelector('#app').innerHTML = `
<div class="row justify-content-center p-0">
    <div class="container">
        <div class="jumbotron jumbotron-fluid rounded m-5 pt-5 text-white bg-primary">
        <div class="container">
            <h1 class="display-5">Adam Vaughn</h1>
            <h2 class="display-5 pb-5">Full-Stack Developer | Embedded Systems Engineer</h2>
            <p class="lead pt-5 ">"Automating a better tomorrow"</p>
            </div>
            </div>
            <div class="alert alert-success m-5" role="alert">
            <p>This resume was created using Bootstrap 4!</p>
            </div>
            <ul class="list-group  m-5">
            <h1 class="pb-2">My Skills</h1>
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
                <h1 class="m-5">My Experience</h1>
                <div class="container pt-1 m-3">
                <div class="col-md ">
                <div class="row">
                <div class="col-md-4">
                                <div class="card">
                                <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                    <div class="card-body">
                                    <h5 >AMV Embedded Systems</h5>
                                    <p>Lorem Ipsum.</p>
                                        <a href="#" class="btn btn-primary">Click Me!</a>
                                        </div>
                                        </div>
                                        </div>
                                        <div class="col-md-4">
                                        <div class="card">
                            <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                            <div class="card-body">
                                <h5 >AMV Embedded Systems</h5>
                                <p>Lorem Ipsum.</p>
                                <a href="#" class="btn btn-primary">Click Me!</a>
                                </div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="card">
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
                                <div class="col-md-4">
                                <div class="card">
                                    <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                    <div class="card-body">
                                    <h5 >AMV Embedded Systems</h5>
                                    <p>Lorem Ipsum. </p>
                                    <a href="#" class="btn btn-primary">Click Me!</a>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="card">
                                    <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                    <div class="card-body">
                                    <h5 >AMV Embedded Systems</h5>
                                    <p>Lorem Ipsum. </p>
                                    <a href="#" class="btn btn-primary">Click Me!</a>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="card">
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
                                            <div class="col-md-4">
                                            <div class="card">
                                            <img src="./headshot.jpg" class="card-img-top" alt="A squirrel on my head"/>
                                            <div class="card-body">
                                            <h5 >AMV Embedded Systems</h5>
                                            <p>Lorem Ipsum. </p>
                                            <a href="#" class="btn btn-primary">Click Me!</a>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="card">
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
                                                </div>
                                                <div class="jumbotron jumbotron-fluid rounded m-5 ">
                                                <div class="container mt-0 text-center">                                                                                                <p class="lead font-weight-bold text-align-center">Adam Vaughn</p>
                                                <p id = "time" class="lead pt-0 mt-0">${currentTime}</p>
                                                </div>
                                                </div>
                                                </div>
                                                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                                                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                                    crossorigin="anonymous"></script>
                                    <script src = "script.js"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                                    crossorigin="anonymous"></script>
                                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                                    crossorigin="anonymous"></script>
                                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
                                    </div>
                                    ` 


                                    document.getElementById("time").innerHTML = `Birmingham, AL &copy; ${currentTime()}`;