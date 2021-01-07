// Load main window
$(function() {
	$( document ).tooltip({
	track: true,
	});
});

$(window).unload(function() {
  $('select option').remove();
});

/* initialize variables */

// project
var id = [];
var elements = [];
var project = false;
var setter = new this.NestedSetterAndGetter();
var currentSelectedElement = "";

// createScript
var closedChildren = 0;
var openedChildren = 0;
var currentTabs = "";

// addElement
var savedPath = [];
var curPath = "-";
var script = "";

function initialize() {
	id = []
	
	id['label'] = 0;
	
	id['xsmall_button'] = 0;
	id['small_thin_button'] = 0;
	id['small_button'] = 0;
	id['middle_button'] = 0;
	id['big_button'] = 0;
	id['large_button'] = 0;
	id['xlarge_thin_button'] = 0;
	id['xlarge_button'] = 0;
	id['close_button'] = 0;
	id['minimize_button'] = 0;
	
	id['board'] = 0;
	id['thinboard'] = 0;
	
	elements = [];
	currentSelectedElement = [];
}

/*
	PROJECT
	
	# create a new Project > newProject;
	
	// todo:
	# load project 
	# save project
*/

function newProject() {
	var allowed = true;
	
	// if first project, then don't ask
	if (project) {
		allowed = confirm("Are you sure you want to start a new project?");
	}
	if (allowed) {
		//clear var
		removeAllOptions(parentList);
		removeAllOptions(elementList);
		
		//show sidebars
		$(".hiddenElements").show();
		
		//load standart variables
		initialize();
		
		//remove the old window div
		$('#window').remove();
		
		// element properties
		elements['window'] = [];
		elements['window']['script'] = [];
		elements['window']['script']['name'] = "window";
		elements['window']['script']['type'] = "window";
		elements['window']['script']['style'] = "'attach','movable'";
		elements['window']['script']['x'] = "0";
		elements['window']['script']['y'] = "0";
		elements['window']['script']['width'] = "750";
		elements['window']['script']['height'] = "500";
		elements['window']['script']['children'] = [];
		elements['window']['script']['parentPath'] = "window";
		elements['window']['script']['parentId'] = "None";
		elements['window']['name'] = "window";
		
		// add the new window div
		$('<div id="'+elements['window']['name']+'" class="ui-widget-content"></div>').appendTo('#mainPaper');
		
		// Add resizable parent "Window"
		$("#window" ).resizable({
			resize: function(event){
				resizeChangeScriptSize("window");
				createElementOptions("window");
			}
		});
		
		//Select element from parentlist on click 
		$('#window').on('click', function(event) { 
			setCurrentParent('window');
			setCurrentElement('window');
			event.stopPropagation();
		});
		
		// initialize mouse position function
		$('#window').mousemove(function(e){
			var offset = $(this).offset(); 
			var x = e.pageX - offset.left;
			var y = e.pageY - offset.top;
			$("#mousePosX").text("x: "+x);
			$("#mousePosY").text("y: "+y);
		});
		
		// Add to dropdownbox
		addOption(elementList, 'window', 'window');
		addOption(parentList, 'window', 'window');
		
		// Set project to true
		project = true;
		// console.log('New project');
		createElementOptions('window');
	}
}

/*
	GUI
	
	# add a new element > addElement(sting* type);
		# available type's: 
			config/guiElements.js
*/

// Add Gui element
function addElement(type) {
	if (project == false) {
		alert('Please start a new project first.');
		return;
	}
	
	var element = []; // current element
	var isParentElement = false;
	
	var parentPath = $("#parentList :selected").val()
	var parentId = $("#parentList :selected").text()
	
	switch(type) {
		case 'label':
			element['name'] = "label_"+id['label'];
			element['script'] = [];
			element['script']['name'] = "label_"+id['label'];
			element['script']['type'] = "text";
			element['script']['text'] = "label "+id['label'];
			element['script']['color'] = "#c3c2bd";
			element['script']['x'] = "0";
			element['script']['y'] = "0";
			element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
			element['script']['parentId'] = parentId;
			
			var style = "border: none; "+
			"color: "+element['script']['color']+"; "+
			"font: 12px Tahoma,Arial;"+
			"white-space:nowrap;"
			
			id['label']++;
			$('<div id="'+element['name']+'" class="guiElement"><span style="'+style+'">'+element['script']['text']+'</span></div>').appendTo('#'+element['script']['parentId']);
			break;
					
		//Buttons
		case 'button':
			switch($("#buttonType :selected").text()) {
				case 'xsmall_button':
					element['name'] = "xsmall_button_"+id['xsmall_button'];
					element['script'] = [];
					element['script']['name'] = "xsmall_button_"+id['xsmall_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['xsmall_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/xsmall_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/xsmall_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/xsmall_button_03.sub";
					element['width'] = "37";
					element['height'] = "19";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/xsmall_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['xsmall_button']++;
					break;
					
				case 'small_thin_button':
					element['name'] = "small_thin_button_"+id['small_thin_button'];
					element['script'] = [];
					element['script']['name'] = "small_thin_button_"+id['small_thin_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['small_thin_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/small_thin_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/small_thin_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/small_thin_button_03.sub";
					element['width'] = "60";
					element['height'] = "20";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/small_thin_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['small_thin_button']++;
					break;
					
				case 'small_button':
					element['name'] = "small_button_"+id['small_button'];
					element['script'] = [];
					element['script']['name'] = "small_button_"+id['small_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['small_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/small_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/small_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/small_button_03.sub";
					element['width'] = "43";
					element['height'] = "21";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/small_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['small_button']++;
					break;
					
				case 'middle_button':
					element['name'] = "middle_button_"+id['middle_button'];
					element['script'] = [];
					element['script']['name'] = "middle_button_"+id['middle_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['middle_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/middle_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/middle_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/middle_button_03.sub";
					element['width'] = "61";
					element['height'] = "21";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/middle_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['middle_button']++;
					break;
					
				case 'big_button':
					element['name'] = "big_button_"+id['big_button'];
					element['script'] = [];
					element['script']['name'] = "big_button_"+id['big_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['big_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/big_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/big_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/big_button_03.sub";
					element['width'] = "51";
					element['height'] = "37";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/big_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['big_button']++;
					break;
					
				case 'large_button':
					element['name'] = "large_button_"+id['large_button'];
					element['script'] = [];
					element['script']['name'] = "large_button_"+id['large_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['large_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/large_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/large_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/large_button_03.sub";
					element['width'] = "88";
					element['height'] = "21";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/large_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['large_button']++;
					break;
					
				case 'xlarge_thin_button':
					element['name'] = "xlarge_thin_button_"+id['xlarge_thin_button'];
					element['script'] = [];
					element['script']['name'] = "xlarge_thin_button_"+id['xlarge_thin_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['xlarge_thin_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/xlarge_thin_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/xlarge_thin_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/xlarge_thin_button_03.sub";
					element['width'] = "57";
					element['height'] = "30";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/xlarge_thin_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['xlarge_thin_button']++;
					break;
					
				case 'xlarge_button':
					element['name'] = "xlarge_button_"+id['xlarge_button'];
					element['script'] = [];
					element['script']['name'] = "xlarge_button_"+id['xlarge_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "btn "+id['xlarge_button'];
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/xlarge_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/xlarge_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/xlarge_button_03.sub";
					element['width'] = "180";
					element['height'] = "25";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/xlarge_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "+
					"color: #c3c2bd; "+
					"font: 12px Tahoma,Arial;"
					
					id['xlarge_button']++;
					break;
					
				case 'close_button':
					element['name'] = "close_button_"+id['close_button'];
					element['script'] = [];
					element['script']['name'] = "close_button_"+id['close_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "";
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/close_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/close_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/close_button_03.sub";
					element['width'] = "15";
					element['height'] = "15";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/close_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "
					
					id['close_button']++;
					break;
				case 'minimize_button':
					element['name'] = "minimize_button_"+id['minimize_button'];
					element['script'] = [];
					element['script']['name'] = "minimize_button_"+id['minimize_button'];
					element['script']['type'] = "button";
					element['script']['text'] = "";
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['default_image'] = "d:/ymir work/ui/public/minimize_button_01.sub";
					element['script']['over_image'] = "d:/ymir work/ui/public/minimize_button_02.sub";
					element['script']['down_image'] = "d:/ymir work/ui/public/minimize_button_03.sub";
					element['width'] = "16";
					element['height'] = "15";
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "background: url(images/gui/button/minimize_button.png) "+
					"no-repeat; "+
					"overflow: hidden;"+
					"border: none; "+
					"width: "+element['width']+"px; "+
					"height: "+element['height']+"px; "
					
					id['minimize_button']++;
					break;
					
				}
			// Add button
			$('<div id="'+element['name']+'" class="guiElement"><button style="'+style+'">'+element['script']['text']+'</button></div>').appendTo('#'+element['script']['parentId']);
			break;
			
		// parent elements
		case 'board':
			isParentElement = true;
			switch($("#boardType :selected").text()) {
				case 'board':
					element['name'] = "board_"+id['board'];
					element['script'] = [];
					element['script']['name'] = "board_"+id['board'];
					element['script'] ['type'] = "board";
					element['script'] ['style'] = "'attach'";
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['width'] = "100";
					element['script']['height'] = "100";
					element['script']['children'] = [];
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "width: "+element['script']['width']+"px; "+
					"height: "+element['script']['height']+"px"; 
					
					$('<div id="'+element['name']+'" style="'+style+'" class="guiElement board "></div>').appendTo('#'+element['script']['parentId']); // ui-widget-content removed
					$('<div class="ui-resizable-handle" id="corner-left-top"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="line-top"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="corner-right-top"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="line-right"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="corner-right-bottom"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="line-bottom"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="corner-left-bottom"></div>').appendTo('#'+element['name']);
					$('<div class="ui-resizable-handle" id="line-left"></div>').appendTo('#'+element['name']);
					
					$('#'+element['name']).resizable({containment: '#'+element['script']['parentId'],minHeight: 52, minWidth: 52,
					handles: {
						'e': '#line-right',
						'se': '#corner-right-bottom',
						's': '#line-bottom',
					},
					resize: function(event){
						resizeChangeScriptSize(element['script']['parentPath']);
						createElementOptions(element['script']['parentPath']);
					}});
					id['board']++;
					break;
				case 'thinboard':
					element['name'] = "thinboard_"+id['thinboard'];
					element['script'] = [];
					element['script']['name'] = "thinboard_"+id['thinboard'];
					element['script']['type'] = "thinboard";
					element['script']['style'] = "'attach'";
					element['script']['x'] = "0";
					element['script']['y'] = "0";
					element['script']['width'] = "100";
					element['script']['height'] = "100";
					element['script']['children'] = [];
					element['script']['parentPath'] = parentPath +'.children.'+ element['name'];
					element['script']['parentId'] = parentId;
					
					var style = "width: "+element['script']['width']+"px; "+
					"height: "+element['script']['height']+"px"; 
					
					$('<div id="'+element['name']+'" style="'+style+'" class="guiElement thinboard "></div>').appendTo('#'+element['script']['parentId']); // ui-widget-content removed
					$('#'+element['name']).resizable({containment: '#'+element['script']['parentId'],minHeight: 52, minWidth: 52, 
					resize: function(event){
						resizeChangeScriptSize(element['script']['parentPath']);
						createElementOptions(element['script']['parentPath']);
					}});
					id['thinboard']++;
					break;
				}
				
			addOption(parentList, element['name'],element['script']['parentPath']);
			break;
	} 
	
	// Add element to element list
	setter.set(elements, element['script']['parentPath'], element);
	addOption(elementList, element['name'],element['script']['parentPath'])
	
	// Add draggable/select on elementlist function
	$(function() {
		// Add draggable function to element id
		$('#'+element['name'] ).draggable({containment: "#"+element['script']['parentId'], cancel:false,
		//Select element from elementlist on drag begin
		drag: function(event){
		if (isParentElement) { // set currentparent
			setCurrentParent(element['script']['parentPath']); 
		}
		setCurrentElement(element['script']['parentPath']); 
		dragChangeScriptPosition(element['script']['parentPath']);
		event.stopPropagation();
		
		}});
		//Select element from elementlist on click 
		$('#'+element['name']).on('click', function(event) { 
			if (isParentElement) { // set currentparent
				setCurrentParent(element['script']['parentPath']); 
			}
			setCurrentElement(element['script']['parentPath']); 
			event.stopPropagation();
		});
	});
}

/*
	SCRIPT
	
	# create a downloadable script > createScript(string* type);
		# available type's: 
			uiscript
	
	// todo:
	# load uiscript 
	# load py // maybe.
	# create script type py
*/

function cutCurrentTabs(value) {
	currentTabs = currentTabs.substring(0, currentTabs.length-1*value);
}

function addCurrentTabs(value) {
	for (var i=0; i < value; i++) {
		currentTabs += "\t";
	}
}
function createUiScriptCode(o) {
	for (var i in o) {
		if (o[i] !== null && typeof(o[i])=="object") {
			if (i == "script") {
				var check = true;
				var counter = 0;
				while (check){
					if (o[i].parentPath.includes(curPath) == false){
							var temp;
							curPath = curPath.split(".");
							var temp = "";
							for (var x = 0; x <= curPath.length-3; x++){
								temp += curPath[x];
								if (curPath.length-3 != x){
									 temp += '.';
								}
							}
							curPath = temp;
						if (counter > 0) {
							closedChildren++;
							// console.log('),')
							cutCurrentTabs(1);
							script += currentTabs+'),\n';
							// console.log('},')
							cutCurrentTabs(1);
							script += currentTabs+'},\n';
						}
						counter++;
					}
					else{
						check = false;
					}
				}
				curPath = o[i].parentPath;
				
				curPath = curPath.split(".");
				var temp = "";
				for (var x = 0; x <= curPath.length-3; x++){
					temp += curPath[x];
					if (curPath.length-3 != x){
						 temp += '.';
					}
				}
				savedPathTemp = temp;
				
				// CHILDREN PART
				curPath = o[i].parentPath;
				var isNewChildren = false;
				if(in_array(savedPathTemp,savedPath) == -1 && savedPathTemp != ""){
					isNewChildren = true;
					openedChildren++;
					addCurrentTabs(1);
					savedPath.push(savedPathTemp);
					// console.log('children :');
					script += currentTabs+'"children" :\n';
					// console.log('(');
					script += currentTabs+'(\n';
				}
				
				// SCRIPT ELEMENT PART
				// console.log('{');
				if (isNewChildren)
					addCurrentTabs(1);
				script += currentTabs+'{\n';
				// if (isNewChildren)
				addCurrentTabs(1);
				for (var key in o[i]) {
					if (key != "children" && key != "parentPath" && key != "parentId") {
						// console.log(key+' : '+o[i][key]+',');
						if (key == "style") {
							script += currentTabs+'"'+key+'" : ('+o[i][key]+'),\n';
						}
						else if (key == "color"){
							script += currentTabs+'"'+key+'" : '+o[i][key].replace('#','0xff')+',\n';
						}
						else {
							script += currentTabs+'"'+key+'" : "'+o[i][key]+'",\n';
						}
					}
				}
				cutCurrentTabs(1)
				
				var children = setter.get(elements, o[i].parentPath).children
				if (children == undefined || objectIsEmpty(children)) {
					// console.log('},');
					// cutCurrentTabs(1);
					script += currentTabs+'},\n';
				}
			}
			createUiScriptCode(o[i]);
        }
    }
}

function createScript(type) {
	if (project == false){
		alert('Please start a new project first.');
		return;
	}
	if (type == "uiscript") {
		closedChildren = 0;
		openedChildren = 0;
		savedPath = [];
		curPath = "-";
		currentTabs = "";
		script = "window = ";
		createUiScriptCode(elements);

		
		for (var i = 1; i <= openedChildren - closedChildren; i++){
			cutCurrentTabs(1);
			script += currentTabs+'),\n';
			cutCurrentTabs(1);
			if (openedChildren - closedChildren != i) {
				script += currentTabs+'},\n';
			}
			else {
				script += currentTabs+'}\n';
			}
		}
	}
	
	var a = window.document.createElement('a');
	a.href = window.URL.createObjectURL(new Blob([script], {type: 'text/txt'}));
	a.download = 'script.py';

	// Append anchor to body.
	document.body.appendChild(a)
	a.click();

	// Remove anchor from body
	document.body.removeChild(a)
	
}