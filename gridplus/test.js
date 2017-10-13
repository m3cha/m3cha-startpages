function imgswap(ctgry){
	document.getElementById('imgswap').src = "img/"+ctgry+".png";
}

function tblswap(ctgry){
	var derp =['vidya','progr','sandw','mandm','commu'];
	for (i=0;i<derp.length;i++){
		document.getElementById(derp[i]).style.display = 'none';
	}
	document.getElementById(ctgry).style.display = 'block';
}

function test(){
	alert("You did a thing!");
}

function megaswap(ctgry){
	tblswap(ctgry);
	imgswap(ctgry);
}