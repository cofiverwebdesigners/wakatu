function toggleMenu(){
	var navbar=document.getElementById("mynavbar");
	var my_ham=document.getElementById("ham");
	
	if(navbar.className==="navbar"){
		navbar.className+=" responsive";
	}else{
		navbar.className="navbar";
	}
	my_ham.style.display="none";
}
function closeMenu() {
    var navbar = document.getElementById("mynavbar");
    var my_ham = document.getElementById("ham");

    if (navbar.className.includes("responsive")) {
        navbar.className = navbar.className.replace(" responsive", "");
        my_ham.style.display = "block";
    }
}
