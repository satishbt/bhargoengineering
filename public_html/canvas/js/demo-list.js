;(function() {

	var entries = [
		{ id:"demo", name:"jsPlumb Home", about:"Main jsPlumb demo page.  Contains a bit of everything" },
		{ id:"flowchartConnectorsDemo", name:"Flowchart Connectors", about:"Demonstration of the Flowchart connectors" },
		{ id:"draggableConnectorsDemo", name:"Draggable Connections", about:"Demonstration of drag and drop connections" },
		{ id:"perimeterAnchorsDemo", name:"Perimeter Anchors", about:"Demonstration of perimeter anchors" },
		{ id:"stateMachineDemo", name:"State Machine", about:"Demonstration of the State Machine Connectors and Continuous Anchors" },
		{ id:"chartDemo", name:"Chart Demonstration", about:"Simple Chart Demo" },
		{ id:"anchorDemo", name:"Sources and Targets", about:"Demonstration of how to make whole elements Connection sources and targets" },
		{ id:"dynamicAnchorsDemo", name:"Dynamic Anchors", about:"Demonstration of Dynamic Anchors" },
		{ id:"dragAnimDemo", name:"Animation", about:"Drag/drop demo with animation" }
	],
	libraries = [
		{id:"jquery", name:"jQuery"},
		{id:"mootools", name:"MooTools"},
		{id:"yui3", name:"YUI3"}
	],
	prepareOtherLibraryString = function(demoId, library) {
		var s = "", demoInfo = jsPlumb.DemoList.find(demoId);
		for (var i = 0; i < libraries.length; i++) {
			var c = libraries[i].id == library ? "selected" : "";
			s += '<a class="' + c + '" href="../' + libraries[i].id + '/' + demoId + '.html">' + libraries[i].name + '</a>&nbsp;&nbsp;';
		}
		return s;
	},
	demoSelectorString = (function() {
		var s = '<h5>Select Demo:</h5><select id="demoSelector" class="demoSelector">';
		for (var i = 0; i < entries.length; i++) {
			s += '<option value="' + entries[i].id + '.html">' + entries[i].name + '</option>';
		}
		s += '</select>';
		return s;
	})();
	
	
	
})();