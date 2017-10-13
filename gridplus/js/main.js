function imgswap(ctgry)
{
	$("#imgswap").attr('src','img/'+ctgry+.'png');
}

function tblswap(ctgry)
{
	var categories =['vidya','progr','sandw','mandm','commu'];
	for (i=0;i<categories.length;i++){
		document.getElementById(categories[i]).style.display = 'none';
	}
	document.getElementById(ctgry).style.display = 'block';
	document.getElementById('bar').style.display = 'none';
}

function test()
{
	document.getElementById('bar').style.display = 'none';
}

function megaswap(ctgry)
{
	imgswap(ctgry);
	tblswap(ctgry);
}