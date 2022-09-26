function currentTime() { 
    let year =
new Date().getFullYear();
return year
}

document.getElementById("time").innerHTML = `Birmingham, AL &copy; ${currentTime()}`;