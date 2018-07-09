function myFunction(){

	var x = document.getElementById("myTopnav");

	if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
   	} else {
        x.className = "topnav";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";     
   	}
}