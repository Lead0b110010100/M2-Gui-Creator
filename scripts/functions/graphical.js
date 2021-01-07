
function blink(elementPath)
{
	$('#'+setter.get(elements, elementPath).name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function setPreview(type, image) {
	switch(type) {
		case 'button':
			document.getElementById("buttonPreview").src="images/gui/button/"+image+".png";
		break;
		
		case 'parentElement':
			document.getElementById("parentPreview").src="images/gui/board/"+image+".png";
		break;
	}
}