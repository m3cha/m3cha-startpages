var accordionItems = new Array();

function init() {
	var divs = document.getElementsByTagName( 'div' );
    for ( var i = 0; i < divs.length; i++ ) {
    	if ( divs[i].className == 'accordionItem' ) {
    		accordionItems.push( divs[i] );
    	}
    	else if ( divs[i].className == 'accordionTitle' ) {
    		divs[i].onclick = toggleItem;
    	}
    }
}

function toggleItem() {
	var cn = this.parentNode.className;
	for (var i = 0; i<accordionItems.length; i++){
		accordionItems[i].className = "accordionItem";
	}
	if (cn != "accordionItem show"){
		this.parentNode.className = "accordionItem show";
	}
}