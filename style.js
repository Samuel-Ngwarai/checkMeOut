
window.onload = function() {
    // alert("Hello! I am an alert box!!");
    var whoIAm;
    var projects = document.getElementById("projects");
    var attributes = document.getElementById("attributes");

    projects.style.display = "none";


    whoIAm = document.getElementById('whoIAm');

    whoIAm.onclick = function() {
        if (attributes.style.display === "none") {
          attributes.style.display = "block";
          projects.style.display = "none";
        }
    };

    var whatIBuilt;

    whatIBuilt = document.getElementById('whatIBuilt');

    whatIBuilt.onclick = function() {
        if (projects.style.display === "none") {
          projects.style.display = "block";
          attributes.style.display = "none";
        }
    };

};
