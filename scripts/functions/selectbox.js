function removeAllChildrenElements(element) {
	for (var i in element) {
		if (element[i] !== null && typeof(element[i])=="object") {
			if (i == "script") {
				$("#elementList option[value='"+ element.script.parentPath +"']").remove();
				$("#parentList option[value='"+ element.script.parentPath +"']").remove();
			}
			removeAllChildrenElements(element[i]);
		}
	}
}

function removeSelectedElement() {
	var element = setter.get(elements, $("#elementList :selected").val());
	
	if (element.name == "window") {
		alert("You can't delete me.");
		return;
	}
	
	$('#'+element.name).remove();
	setter.remove(elements, $("#elementList :selected").val())
	
	removeAllChildrenElements(element);
	createElementOptions('window');
}


function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		selectbox.remove(i);
	}
}

function removeOptions(selectbox)
{
	$("#" + selectbox +" option:selected").remove();
}

function addOption(selectbox,text,value)
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function createElementOptions(elementPath) {
	if (currentSelectedElement != elementPath) {
		currentSelectedElement = elementPath;
		var element = setter.get(elements, elementPath);
		$('#scriptOptions').empty();
		
		for (var option in element.script) {
			if (option != "parentId" && option != "parentPath" && option != "children" && option != "type") {
				var event = "onChangeInputOption('"+elementPath+".script."+option+"','"+element.name+"','"+option+"',this.value);";
				$( '<br/>'+option+'<br/> <input class="optionField" id="'+element.name+'_'+option+'" type="text" value="'+element.script[option]+'" onChange="'+event+'"></input>').appendTo('#scriptOptions');
			}
		}
	}
}

function resizeChangeScriptSize(elementPath) {
	var element = setter.get(elements, elementPath);
	var width = $('#'+element.name).width();
	var height = $('#'+element.name).height();
	setter.set(elements, elementPath+'.script.width', width);
	setter.set(elements, elementPath+'.script.height', height);
	$('#'+element.name+'_width').val(width);
	$('#'+element.name+'_height').val(height);
}

function dragChangeScriptPosition(elementPath) {
	var element = setter.get(elements, elementPath);
	var position = $('#'+element.name).position();
	setter.set(elements, elementPath+'.script.x', position.left);
	setter.set(elements, elementPath+'.script.y', position.top);
	$('#'+element.name+'_x').val(position.left);
	$('#'+element.name+'_y').val(position.top);
}

function onChangeInputOption(elementPath, elementName, option ,value){
	setter.set(elements, elementPath, value);
	
	switch(option) {
		case "x":
			if (elementName != "window"){
				document.getElementById(elementName).style.left = value;
			}
			break;
		case "y":
			if (elementName != "window"){
				document.getElementById(elementName).style.top = value;
			}
			break;
		case "width":
			document.getElementById(elementName).style.width = value;
			break;
		case "height":
			document.getElementById(elementName).style.height = value;
			break;
		case "name":
			element.style.height = value;
			break;
		case "text":
			$('#'+elementName+' button').text(value);
			$('#'+elementName+' span').text(value);
		case "color":
			var element = document.getElementById(elementName);
			if (element.getElementsByTagName('span')[0]) {
				element.getElementsByTagName('span')[0].style.color = value;
			}
			
			break;
	}
	// $('#'+elementName).val(value);
}



function setCurrentParent(value){$("#parentList").val(value);}
function getCurrentParent(){return $("#parentList :selected").text();}

function setCurrentElement(value){
	$("#elementList").val(value);
	createElementOptions(value);
}
function getCurrentElement(){return $("#elementList :selected").text();}